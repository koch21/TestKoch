import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  flex-direction: row;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
`

export const Answerdiv = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 9vh;
  justify-content: space-between;
  margin-top: 20px;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-left: 8vw;
  }
  Button {
    background-color: ${props => props.theme.colors.pink};
    margin-right: 8vw;
  }
  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`

export const Wrapper = styled.div`
  margin-top: 12vw;

  p {
    font-size: 22px;
    font-family: Inter, Times, serif;
    line-height: 32px;
    margin-top: 20px;
    margin-left: 36px;
  }
`

export const Buttondiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  Button {
    background-color: ${props => props.theme.colors.primary};
    margin-right: 8vw;
    margin-bottom: 30px;
  }
  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
