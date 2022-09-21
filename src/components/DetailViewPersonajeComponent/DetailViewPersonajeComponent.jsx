import "./DetailViewPersonajeComponent.scss"

export const DetailViewPersonajeComponent = (props) => {
  const { name, status, species, gender, image } = props
  return (
    <div className="tarjetaPersonaje">
      <div className="cuerpo">
        <img src={image} alt="muestra" />
      </div>
      <div className="pie">
        <h1>{name}</h1>
        <ul className="lista">
          <li>Estado: {status}</li>
          <li>Especie: {species}</li>
          <li>Genero: {gender}</li>
        </ul>
      </div>
    </div>
  )
}
