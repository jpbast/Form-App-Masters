import styled from 'styled-components'

type Error = {
  error: boolean
}

export const Wrapper = styled.div<Error>`
  text-align: left;

  input {
    width: 100%;
    padding: 1.3rem;
    font-family: inherit;
    font-size: 1.8rem;
    font-style: none;
    box-shadow: ${props => props.error ? '0 0 1px 1px rgb(255, 0, 90)' : null};
    color: black;
    border: none;
  }

  input:disabled {
    background-color: #c8c8c8;
    font-style: italic;
  }
  
  input:focus {
    box-shadow: 0 0 1px 1px #c8c8c8;
  }

  span {
    font-size: 1.8rem;
    color: black;
    font-style: none;
  }

  span:last-child {
    font-size: 1.4rem;
    color: red;
    font-style: italic;
  }
`