import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
    margin-left: 30px;
    margin-right: 30px;
  }
`

export const Wrapper = styled.div`
  margin-top: 80px;

  p {
    font-size: 22px;
    font-family: Inter, Times, serif;
    line-height: 32px;
    margin-top: 20px;
    margin-left: 36px;
    margin-right: 30px;
  }
`
