import React from "react";
import { Button } from "@material-ui/core";
import { useFetch } from "../hooks/useFetch";

// Styles
import { Container, Answerswrapper } from '../styles/pages/answers'

interface Questionsss {
  category: string;
  question: string;
  answer: string;
}

export function Answers(props) {

  // Chamada da API
  const { data } = useFetch<Questionsss[]>(`https://opentdb.com/api.php?amount=`)

  // Props
  const { category, question, answer } = props;

  function setRight(num) {
    const currentPoint = localStorage.getItem('rightAns')
    localStorage.clear()
    localStorage.setItem('rightAns', `${currentPoint + num}`)
  }

  function checkPoint(answer) {
    if (answer === data) {
      setRight(1)
    } else {
      setRight(-1)
    }
  }

  return (
    <Container>
      <Answerswrapper>
        <div className="Answers-id"><h5>{category}</h5></div>
        <div className="Answers"><p>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '"')}</p></div>
        <input type="text" id="AnswerRes" value={answer} placeholder="Digite sua resposta aqui" />
        <Button variant="contained"
          color="default"
          onClick={() => checkPoint(answer)}>
          send
          </Button>
      </Answerswrapper>
    </Container>
  );
}
