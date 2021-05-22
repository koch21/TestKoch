import React from 'react'
import { AppProps } from 'next/app'

//styles
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import dark from '../styles/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider >
  )
}

export default MyApp
