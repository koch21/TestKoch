import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const Answerdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 9vh;
  justify-content: space-between;
  position: absolute;
  margin-top: 20px;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-left: 4vw;
  }
  Button {
    background-color: ${props => props.theme.colors.pink};
    margin-right: 4vw;
  }
  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`

export const Wrapper = styled.div`
  margin-top: 14vw;

  p {
    font-size: 22px;
    font-family: Inter, Times, serif;
    line-height: 32px;
    margin-top: 20px;
    margin-left: 36px;
  }
`
