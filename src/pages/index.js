import Form from '../components/Form'
import Container from '../styles/components/Container'
import Loader from '../components/Loader'
import { LoadingContext } from '../contexts/LoadingContext'
import { useContext } from 'react'
import styled from 'styled-components'

const LoadingSpinner = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  opacity: 1;
`

export default function Home() {
  const [loading] = useContext(LoadingContext)

  return (
    <Container>
      <Form />
      <LoadingSpinner>
        <Loader loading={loading} />
      </LoadingSpinner>
    </Container>
  )
}