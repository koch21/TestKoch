import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

//style
import { Button } from '@material-ui/core'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {

  // guarda o valor para outra pagina
  function getNum() {
    return localStorage.getItem("userName");
  }
  function updateHTML() {
    var num = getNum();
    document.getElementById("NumRes").innerHTML = num;
  }
  function myFunction() {
    // recebe o valor
    var num = document.getElementById("NumRes").value;

    // salva o valor para usar depois
    localStorage.setItem("numRes", num);

    // att o html
    updateHTML();

    // alerta e deixar a pagina em full para deixar a prova mais animada :)
    alert("Clique apenas UMA VEZ em cada box para nao ter um resultado errado, e tenha uma boa prova");
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
