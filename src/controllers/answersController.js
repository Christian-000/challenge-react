import { transaction } from "./transactions";

export async function answersController(
  bool,
  answers,
  navigate,
  user = window.ethereum._state.accounts[0]
) {
  const correctAnswers = ["Opt3", "Opt3", "Opt2"];
  let matches = 0;
  if (!bool) {
    return navigate("/dashboard", { replace: true });
  }
  correctAnswers.forEach((el, i) => {
    if (el === answers[i]) matches++;
  });
  if (matches > 0) {
    await transaction(user).catch(() => {
      alert("The transaction was rejected");
    });
    return navigate("/dashboard", { replace: true });
  } else {
    alert("you have failed everything :') ");
    return navigate("/dashboard", { replace: true });
  }
}
