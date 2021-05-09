import Form from '../components/Form'
import * as Styles from '../styles/Home.styles'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <Styles.Wrapper>
      <a href="https://appmasters.io/pt/" target="_blank">
        <img src="./app-masters.png" alt="Logo App Masters" />
      </a>
      <Form />
      <Loader />
    </Styles.Wrapper>
  )
}