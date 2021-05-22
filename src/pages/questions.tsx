import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

//style
import { Container } from '../styles/pages/questions'

const Home: React.FC = () => {


  //Chama e manipulacao da API
  const [data, setData] = useState()
  const getApi = async () => {
    const result = await axios
      .get('https://opentdb.com/api.php?amount=')
    setData(result.data)
  }
  useEffect(() => { getApi() }, [])

  return (
    <Container>
      <Head>
        <title>WaProject</title>
      </Head>

      <main >
        <h1>Resultado no final</h1>
        <p>resposta</p>
      </main>
    </Container>
  )
}

export default Home
