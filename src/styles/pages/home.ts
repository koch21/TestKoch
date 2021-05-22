import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
  }

  p {
    font-size: 22px;
    line-height: 32px;
    margin-top: 20px;
    margin-left: 36px;
    margin-right: 30px;
  }
  input {
    color: ${props => props.theme.colors.background};
    font-size: 14px;
    font-weight: 500;
    font-family: Inter, Times, serif;
    text-align: center;
    width: 46px;
    height: 30px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 5px;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
