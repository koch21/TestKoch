import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

//style
import { Container, Wrapper } from '../styles/pages/questions'

import { Answers } from '../components/answers'

const Questions: React.FC = () => {

  // Chama e manipulacao da API
  const [data, setData] = useState([])
  const getQuestions = async () => {
    const response = await axios
      .get(`https://opentdb.com/api.php?amount=${localStorage.getItem('numRes')}`)
      .catch((err) => {
        console.log("Error:", err);
      });
    if (response && response.data.results) {
      setData(response.data.results);
    }
  };
  useEffect(() => { getQuestions() }, [])

  return (
    <Container>
      <Head>
        <title>WaProject</title>
      </Head>

      <main >
        <h1>Perguntas</h1>
        <Wrapper>
          {data.map((question, results) => (
            <Answers key={results} {...question} />
          ))}
        </Wrapper>
      </main>
    </Container>
  )
}

export default Questions
