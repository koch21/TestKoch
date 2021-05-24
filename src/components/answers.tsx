import React from "react";
import { Checkbox } from "@material-ui/core";
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
            picked: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <div id="my-radio-group" />
              <div role="group" aria-labelledby="my-radio-group">
                <h5>{category}</h5>
                <p>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '"')}</p>
                <PickRow>
                  <label>
                    <Field type="radio" name="picked" value={correct_answer} />
                    {`${correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, '"')}`}
                  </label>
                  <label>
                    <Field type="radio" name="picked" value={incorrect_answers[1]} />
                    {`${incorrect_answers[0].replace(/&quot;/g, '"').replace(/&#039;/g, '"')}`}
                  </label>
                  <label>
                    <Field type="radio" name="picked" value={incorrect_answers[2]} />
                    {`${incorrect_answers[1].replace(/&quot;/g, '"').replace(/&#039;/g, '"')}`}
                  </label>
                  <label>
                    <Field type="radio" name="picked" value={incorrect_answers[3]} />
                    {`${incorrect_answers[2].replace(/&quot;/g, '"').replace(/&#039;/g, '"')}`}
                  </label>
                </PickRow>
              </div>
            </Form>
          )}</Formik>
      </Answerswrapper>
    </Container>
  );
}
