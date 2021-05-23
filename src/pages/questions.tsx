import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

//style
import { Container, Wrapper, Answerdiv } from '../styles/pages/questions'
import { Button } from '@material-ui/core'

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

  const cancelNum = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <Container>
      <Head>
        <title>WaProject</title>
      </Head>

      <main >
        <Answerdiv>
          <h1>Perguntas</h1>
          <Button variant="contained"
            color="default"
            onClick={() => cancelNum()}>
            cancel</Button>
        </Answerdiv>
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
