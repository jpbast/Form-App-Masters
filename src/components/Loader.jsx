import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

export default function Loaderr(props) {
    return (
      <Loader
        visible={props.loading}
        type="Oval"
        color="hsl(257, 27%, 26%)"
        height={70}
        width={70}
      />
    )
}