import React from "react";
import trivia from "../utils/surveys.json";
import TriviaCard from "./TriviaCard";

export default function Survey() {
  return (
    <div>
      <TriviaCard img={trivia.image} title={trivia.title} />
    </div>
  );
}
