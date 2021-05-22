import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

//style
import { Button } from '@material-ui/core'
import { Container } from '../styles/pages/home'
import axios from 'axios'

const Home: React.FC = () => {

  //Ref para o numero de respostas
  const respNum = useRef(null)

  return (
    <Container>
      <Head>
        <title>WaProject</title>
      </Head>

      <main >
        <h1>Conhecimento geral</h1>
        <p>Quantas perguntas quer responder ?
          <input type="number" ref={respNum} />
          <Button variant="contained" color="default" >
            <Link href="/questions"><a>Start</a></Link>
          </Button>
        </p>
      </main>
    </Container >
  )
}

export default Home
