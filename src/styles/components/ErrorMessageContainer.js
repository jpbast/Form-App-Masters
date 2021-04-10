import styled from 'styled-components'

const ErrorMessageContainer = styled.div`
    text-align: left;
    
    label span {
        font-size: 1.15rem;
    }

    span {
        color: black;
        font-style: none;
    }

    && span:last-child {
        color: red;
        font-style: italic;
    }

    input {
        font-style: none;
        ${props => props.error.error ? 'border: 2px solid red' : 'border: 2px solid hsl(257, 7%, 63%)'};
    }
    input:focus {
        border: none;
    }
`

export default ErrorMessageContainer