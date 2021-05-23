import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-left: 22px;
  }
`
export const Answerswrapper = styled.div`
  background-color: #202020;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 22px;
  border-radius: 30px;
  width: 60vw;
  h5 {
    color: ${props => props.theme.colors.primary};
    font-family: Inter, Times, serif;
    margin-top: 26px;
  }
  p {
    font-size: 18px;
    font-family: Inter, Times, serif;
    line-height: 32px;
  }
  input {
    background-color: ${props => props.theme.colors.text};
    width: 50vw;
    height: 40px;
    font-family: Inter, Times, serif;
    font-weight: 600;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 0px;
  }
  Button {
    height: 40px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`
