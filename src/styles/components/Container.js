import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 60px 40px 60px 40px;

    @media screen and (max-width: 1000px) {
        && {
            padding-top: 150px;
        }
    }

    @media screen and (max-width: 500px) {
        && {
            padding-top: 110px;
        }
    }
`

export default Container