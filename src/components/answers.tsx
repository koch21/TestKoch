import React from "react";

// Style
import { Container, Answerswrapper } from '../styles/pages/answers'

export function Answers(props) {
  const { category, question, correct_answer } = props;

  return (
    <Container>
      <Answerswrapper>
        <div className="Answers-id"><h5>Categoria: {category}</h5></div>
        <div className="Answers"><p>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '"')}</p></div>
      </Answerswrapper>
    </Container>
  );
}
