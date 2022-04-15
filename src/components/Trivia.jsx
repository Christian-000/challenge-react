import React, { useEffect, useRef, useState } from "react";
import trivia from "../utils/surveys.json";
import { useNavigate } from "react-router-dom";
import { answersController } from "../controllers/answersController";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Container, Typography, CardMedia, Stack } from "@mui/material";

export default function Trivia() {
  const Ref = useRef(null);
  let navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptions = (optionIndex) => {
    if (optionIndex === 100) {
      setAnswers([...answers, "NONE"]);
    } else {
      setAnswers([
        ...answers,
        trivia.questions[index].options[optionIndex].text,
      ]);
    }

    if (trivia.questions[index + 1]) {
      setIndex(index + 1);
      clearTimer(getDeadTime());
    }
  };

  const [timer, setTimer] = useState("00:00:XX");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("XX:XX:XX");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(
      deadline.getSeconds() + trivia.questions[index].lifetimeSeconds
    );
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  if (answers.length !== 3) {
    return (
      <Container maxWidth="sm">
        {trivia.questions && (
          <div>
            <Typography align="center" variant="h1" color="primary">
              {trivia.questions[index].text}
            </Typography>
            <CardMedia
              component="img"
              height={400}
              width={300}
              image={trivia.questions[index].image}
              alt="question"
            />
            <br />
            <Typography variant="h4">{timer}</Typography>
            {timer.slice(6) === "00" && answers.length !== 3
              ? handleOptions(100)
              : null}
            {trivia.questions[index].options &&
              //Options

              trivia.questions[index].options.map((q, i) => (
                <Stack spacing={10} alignContent={"center"}>
                  <Button
                    variant="contained"
                    key={i}
                    onClick={() => handleOptions(i)}
                  >
                    {q.text}
                  </Button>
                </Stack>
              ))}
          </div>
        )}
      </Container>
    );
  } else {
    return (
      <Container maxWidth="sm">
        <Typography variant="h2" color="primary" marginBottom={7}>
          Your answers were:
        </Typography>
        {answers &&
          answers.map((el, i) => (
            <div>
              <Typography
                margin={3}
                align="center"
                variant="h5"
                fontWeight={600}
                key={i}
              >
                {el}
              </Typography>
              <hr />
            </div>
          ))}
        <Typography marginTop={5} align="center" variant="h4" color={"primary"}>
          Are you satisfied with your answers?
        </Typography>
        <Stack alignItems={"center"}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button
              size="large"
              color="success"
              onClick={() => answersController(true, answers, navigate)}
            >
              Yes
            </Button>
            <Button
              size="large"
              color="error"
              onClick={() => answersController(false, answers, navigate)}
            >
              No
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    );
  }
}
