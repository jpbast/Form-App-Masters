import styled from 'styled-components'

const ButtonStyle = styled.button`
    padding: 0.625rem;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #c8c8c8;
    cursor: pointer;
    transition: 0.08s;
    border: none;
    color: hsl(257, 27%, 26%);
    margin-top: 1rem;

    &&:hover {
        background-color: hsl(257, 7%, 63%);
        color: white;
    }
`

export default ButtonStyle