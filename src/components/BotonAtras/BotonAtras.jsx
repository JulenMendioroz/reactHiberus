import { Link } from "react-router-dom"
import arrow from "../../assets/images/flecha-curva.png"
import "./BotonAtras.css"

export const BotonAtras = ({ url }) => {
  return (
    <Link className="botonAtras" to={url}>
      <img src={arrow} alt="Flecha volver" className="imagen-flecha" />
      <span>Volver Atrás</span>
    </Link>
  )
}
