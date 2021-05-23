import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const Answerdiv = styled.div`
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 6vw;
    margin-left: 6vw;
  }

  Button {
    background-color: ${props => props.theme.colors.pink};
    margin-left: 84vw;
    margin-top: -8vw;
  }
`

export const Wrapper = styled.div`
  margin-top: 20vw;

  p {
    font-size: 22px;
    font-family: Inter, Times, serif;
    line-height: 32px;
    margin-top: 20px;
    margin-left: 36px;
    margin-right: 30px;
  }
`
