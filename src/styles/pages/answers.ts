import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-left: 22px;
  }
`
export const Answerswrapper = styled.div`
  display: flex;
  background-color: #202020;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 22px;
  border-radius: 30px;
  width: 68vw;

  h5 {
    color: ${props => props.theme.colors.primary};
    font-family: Inter, Times, serif;
    margin-top: 26px;
    margin-right: 30px;
    margin-left: 30px;
  }
  p {
    font-size: 18px;
    font-family: Inter, Times, serif;
    line-height: 32px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
  }
`
export const PickRow = styled.div`
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;

  input {
    background-color: ${props => props.theme.colors.text};
    font-family: Inter, Times, serif;
    font-weight: 400;
    margin-bottom: 10px;
    margin-right: 3px;
    margin-left: 10px;
  }
`
