import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { BotonAtras } from "../../components/BotonAtras/BotonAtras"
import { DetailViewPersonajeComponent } from "../../components/DetailViewPersonajeComponent/DetailViewPersonajeComponent"
import { getDetailPersonaje } from "../../services/commonService"
import { routes } from "../../config/routes"
import "./DetailViewPersonaje.css"

export const DetailViewPersonaje = () => {
  const [personaje, setPersonaje] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDetailPersonaje(id).then((result) => {
      setPersonaje(result)
    })
  }, [id])

  return (
    <div className="containerDetailViewPersonaje">
      <div className="divBotonAtras">
        <BotonAtras url={routes.PERSONAJES} />
      </div>
      <DetailViewPersonajeComponent
        key={personaje.id}
        name={personaje.name}
        status={personaje.status}
        species={personaje.species}
        gender={personaje.gender}
        image={personaje.image}
        episodes={personaje.episodes}
      />
    </div>
  )
}
