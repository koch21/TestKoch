import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

//style
import { Button } from '@material-ui/core'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {

  // Storage number to the other page
  function getNum() {
    return localStorage.getItem("userName");
  }
  function updateHTML() {
    var num = getNum();
    document.getElementById("NumRes").innerHTML = num;
  }
  function myFunction() {
    // Gets input value
    var num = document.getElementById("NumRes").value;

    // Saves data to retrieve later
    localStorage.setItem("numRes", num);

    // Updates HTML
    updateHTML();
  }

  return (
    <Container>
      <Head>
        <title>WaProject</title>
      </Head>

      <main >
        <h1>Conhecimento geral</h1>
        <p>Quantas perguntas quer responder ?
          <input id="NumRes" min="0" type="number" />
          <Button variant="contained"
            color="default"
            onClick={() => myFunction()}>
            <Link href="/questions"><a>Start</a></Link>
          </Button>
        </p>
      </main>
    </Container >
  )
}

export default Home
