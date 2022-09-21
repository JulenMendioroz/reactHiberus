import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { BotonAtras } from "../../components/BotonAtras/BotonAtras"
import { DetailViewEpisodioComponent } from "../../components/DetailViewEpisodioComponent/DetailViewEpisodioComponent"
import { getDetailEpisodio } from "../../services/commonService"
import { routes } from "../../config/routes"
import "./DetailViewEpisodio.css"

export const DetailViewEpisodio = () => {
  const [episodio, setEpisodio] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDetailEpisodio(id).then((result) => {
      setEpisodio(result)
    })
  }, [id])

  return (
    <div className="containerDetailViewEpisodios">
      <div className="divBotonAtras">
        <BotonAtras url={routes.EPISODIOS} />
      </div>
      <DetailViewEpisodioComponent
        key={episodio.id}
        name={episodio.name}
        characters={episodio.characters}
        created={episodio.created}
        id={episodio.id}
        air_date={episodio.air_date}
        episode={episodio.episode}
      />
    </div>
  )
}
