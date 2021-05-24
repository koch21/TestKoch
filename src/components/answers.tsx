import React from "react";
import { Field, Form, Formik } from "formik";

// Styles
import { Container, Answerswrapper, PickRow } from '../styles/pages/answers'
import { Button } from "@material-ui/core";

interface Questionsss {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string;
}

export function Answers(props) {
  // Props
  const { category, question, correct_answer, incorrect_answers } = props;

  function onSubmit(count) {
    const currentValue = JSON.parse(localStorage.getItem('RightAns'))
    localStorage.setItem('RightAns', `${currentValue + count}`)
  }

  return (
    <Container>
      <Answerswrapper>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            picked: '',
          }}
          render={({ values }) => (
            <Form>
              <div role="group" aria-labelledby="my-radio-group">
                <h5>{category}</h5>
                <p>{question.replace(/&quot;/g, '"')
                  .replace(/&#039;/g, '"')
                  .replace(/&eacute;/g, '"')
                  .replace(/&Delta;/g, '"')
                  .replace(/&aacute;/g, '"')
                  .replace(/&ouml;/g, '"')}</p>
                <PickRow>
                  {(() => {
                    if (correct_answer === true || false) {
                      return (
                        <div>
                          <label>
                            <Field type="radio" name="picked" value={correct_answer} />
                            {`${correct_answer}`}
                          </label>
                          <label onChange={() => onSubmit(1)} >
                            <Field type="radio" name="picked" value={incorrect_answers[0]} />
                            {`${incorrect_answers[0]}`}
                          </label>
                        </div>
                      )
                    } else {
                      return (
                        <div>
                          <label>
                            <Field type="radio" name="picked" value={correct_answer} />
                            {`${correct_answer.replace(/&quot;/g, '"')
                              .replace(/&#039;/g, '"')
                              .replace(/&eacute;/g, '"')
                              .replace(/&Delta;/g, '"')
                              .replace(/&aacute;/g, '"')
                              .replace(/&ouml;/g, '"')}`}
                          </label>
                          <label onChange={() => onSubmit(1)}>
                            <Field type="radio" name="picked" value={incorrect_answers[0]} />
                            {`${incorrect_answers[0].replace(/&quot;/g, '"')
                              .replace(/&#039;/g, '"')
                              .replace(/&eacute;/g, '"')
                              .replace(/&Delta;/g, '"')
                              .replace(/&aacute;/g, '"')
                              .replace(/&ouml;/g, '"')}`}
                          </label>
                        </div>
                      )
                    }
                  })()}
                  {(() => {
                    if (incorrect_answers[1] === undefined) {
                      return (
                        <div></div>
                      )
                    } else {
                      return (
                        <div>
                          <label onChange={() => onSubmit(1)}>
                            <Field type="radio" name="picked" value={incorrect_answers[1]} />
                            {`${incorrect_answers[1].replace(/&quot;/g, '"')
                              .replace(/&#039;/g, '"')
                              .replace(/&eacute;/g, '"')
                              .replace(/&Delta;/g, '"')
                              .replace(/&aacute;/g, '"')
                              .replace(/&ouml;/g, '"')}`}
                          </label>
                          <label onChange={() => onSubmit(1)}>
                            <Field type="radio" name="picked" value={incorrect_answers[2]} />
                            {`${incorrect_answers[2].replace(/&quot;/g, '"')
                              .replace(/&#039;/g, '"')
                              .replace(/&eacute;/g, '"')
                              .replace(/&Delta;/g, '"')
                              .replace(/&aacute;/g, '"')
                              .replace(/&ouml;/g, '"')}`}
                          </label>
                        </div>
                      )
                    }
                  })()}
                </PickRow>
              </div>
            </Form>
          )}
        />
      </Answerswrapper>
    </Container>
  );
}
