import { Route, Routes } from "react-router-dom"

import "./App.css"
import { routes } from "./config/routes"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Episodios } from "./pages//Episodios/Episodios"
import { Personajes } from "./pages/Personajes/Personajes"
import { Formulario } from "./pages/Formularios/Formulario"
import { DetailViewPersonaje } from "./pages/DetailViewPersonaje/DetailViewPersonaje"
import { DetailViewEpisodio } from "./pages/DetailViewEpisodio/DetailViewEpisodio"

//https://mycolor.space/?hex=%23004165&sub=1 paleta colores elegida Dotting Palette
//Colores: Verde #D4E586, azul chillon #00DEEA azul mas oscuro tirando a gris #94B0B2 y gris marron #AAAD9A

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.PERSONAJES} element={<Personajes />} />
          <Route path={routes.PERSONAJE} element={<DetailViewPersonaje />} />
          <Route path={routes.EPISODIOS} element={<Episodios />} />
          <Route path={routes.EPISODIO} element={<DetailViewEpisodio />} />
          <Route path={routes.CONTACTO} element={<Formulario />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
