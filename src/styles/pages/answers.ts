import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-left: 22px;
  }
`
export const Answerswrapper = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  margin-left: 18px;
  margin-bottom: 16px;
  border-radius: 60px;
  height: 272px;
  width: 800px;

  h5 {
    color: ${props => props.theme.colors.text};
    font-family: Inter, Times, serif;
    margin-left: 35px;
    margin-top: 26px;
  }
  p {
    font-size: 18px;
    font-family: Inter, Times, serif;
    line-height: 32px;
  }
`
