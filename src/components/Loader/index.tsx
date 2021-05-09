import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import * as Styles from './styles'

import Loader from "react-loader-spinner"
import { useContext } from "react"
import { LoadingContext } from "contexts/LoadingContext"

export default function LoaderCircle() {
  const { loadingCtxValues } = useContext(LoadingContext)
  const loading = loadingCtxValues[0]

  return (
    <Styles.Wrapper>
      <Loader
        visible={loading}
        type="Oval"
        color="hsl(257, 27%, 26%)"
        height={70}
        width={70}
      />
    </Styles.Wrapper>
  )
}