import React from 'react'
import Head from 'next/head'

// Styles
import { Container, Wrapper, Answerdiv } from '../styles/pages/questions'
import { Button } from '@material-ui/core'

import { Answers } from '../components/answers'

// Chamada da API
import { useFetch } from '../hooks/useFetch'

interface Questionsss {
  category: string;
  question: string;
  answer: string;
}

const Questions: React.FC = () => {

  const { data } = useFetch<Questionsss[]>(`https://opentdb.com/api.php?amount=`)

  const cancelNum = () => {
    localStorage.clear()
    window.location.reload()
  }

  if (!data) {
    return <p>Carregando...</p>
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
            Cancel</Button>
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
