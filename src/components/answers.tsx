import { Button } from "@material-ui/core";
import React from "react";

// Style
import { Container, Answerswrapper } from '../styles/pages/answers'

export function Answers(props) {
  const { category, question, answer, correct_answer } = props;

  // Storage answer to the check if its right
  function getAnswer() {
    return localStorage.getItem("userName");
  }
  function updateHTML() {
    var Answer = getAnswer();
    document.getElementById("AnswerRes").innerHTML = Answer;
  }
  function myFunction() {
    // Gets input value
    var Answer = document.getElementById("AnswerRes").value;

    // Saves data to retrieve later
    localStorage.setItem("AnswerRes", Answer);

    // Updates HTML
    updateHTML();
  }

  return (
    <Container>
      <Answerswrapper>
        <div className="Answers-id"><h5>{category}</h5></div>
        <div className="Answers"><p>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '"')}</p></div>
        <input type="text" id="AnswerRes" value={answer} placeholder="Digite sua resposta aqui" />
        <Button variant="contained"
          color="default"
          onClick={() => myFunction()}>
          send
          </Button>
      </Answerswrapper>
    </Container>
  );
}
