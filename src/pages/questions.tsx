import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

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

  function cancelNum() {
    localStorage.clear()
  }

  function finalResult() {
    const wrongAns = JSON.parse(localStorage.getItem('RightAns'))
    const ResNum = JSON.parse(localStorage.getItem('numRes'))
    alert(`Voce acertou ${ResNum - wrongAns} de ${ResNum}`)
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
            <Link href="/"><a>Cancel</a></Link>
          </Button>
        </Answerdiv>
        <Wrapper>
          {data?.map((question, results, answer) => (
            <Answers key={results} {...question} {...answer} />
          ))}
          <Button
            variant="contained"
            color="default"
            type="submit"
            onClick={finalResult}
          >Submit</Button>
        </Wrapper>
      </main>
    </Container>
  )
}

export default Questions
