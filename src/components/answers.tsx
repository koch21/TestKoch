import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
// Styles
import { Container, Answerswrapper, PickRow } from '../styles/pages/answers'

interface Questionsss {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string;
}

export function Answers(props) {
  // Props
  const { category, question, correct_answer, incorrect_answers } = props;

  return (
    <Container>
      <Answerswrapper>
        <Formik
          initialValues={{
            picked: '' || true || false,
          }}
          onSubmit={(values) => {
          }}
        >
          {({ values }) => (
            <Form>
              <div role="group" aria-labelledby="my-radio-group">
                <h5>{category}</h5>
                <p>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '"').replace(/&eacute;/g, '"').replace(/&Delta;/g, '"')}</p>
                <PickRow>
                  {(() => {
                    if (correct_answer === true || false) {
                      return (
                        <div>
                          <label>
                            <Field type="radio" name="picked" value={correct_answer} />
                            {`${correct_answer}`}
                          </label>
                          <label>
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
                            {`${correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, '"').replace(/&eacute;/g, '"').replace(/&Delta;/g, '"')}`}
                          </label>
                          <label>
                            <Field type="radio" name="picked" value={incorrect_answers[0]} />
                            {`${incorrect_answers[0].replace(/&quot;/g, '"').replace(/&#039;/g, '"').replace(/&eacute;/g, '"').replace(/&Delta;/g, '"')}`}
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
                          <label>
                            <Field type="radio" name="picked" value={incorrect_answers[1]} />
                            {`${incorrect_answers[1].replace(/&quot;/g, '"').replace(/&#039;/g, '"').replace(/&eacute;/g, '"').replace(/&Delta;/g, '"')}`}
                          </label>
                          <label>
                            <Field type="radio" name="picked" value={incorrect_answers[2]} />
                            {`${incorrect_answers[2].replace(/&quot;/g, '"').replace(/&#039;/g, '"').replace(/&eacute;/g, '"').replace(/&Delta;/g, '"')}`}
                          </label>
                        </div>
                      )
                    }
                  })()}
                </PickRow>
              </div>
            </Form>
          )}</Formik>
      </Answerswrapper>
    </Container>
  );
}
