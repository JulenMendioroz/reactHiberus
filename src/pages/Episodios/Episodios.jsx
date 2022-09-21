import { useEffect, useState } from "react"

import { getEpisodios } from "../../services/commonService.js"
import { Tabla } from "../../components/Tabla/Tabla.jsx"
import "./Episodios.css"

export const Episodios = () => {
  const [episodios, setEpisodios] = useState([])

  useEffect(() => {
    getEpisodios().then((results) => {
      setEpisodios(results)
    })
  }, [])

  return (
    <div className="containerEpisodios">
      <table className="tablaEpisodios">
        <thead>
          <tr>
            <th>Episodio</th>
            <th>Nombre</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {episodios.map((ep) => (
            <Tabla key={ep.id} name={ep.name} episode={ep.episode} id={ep.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
