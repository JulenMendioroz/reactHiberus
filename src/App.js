import { Route, Routes } from "react-router-dom"

import { DetailViewEpisodio } from "./pages/DetailViewEpisodio/DetailViewEpisodio"
import { DetailViewPersonaje } from "./pages/DetailViewPersonaje/DetailViewPersonaje"
import { Episodios } from "./pages/Episodios/Episodios"
import { Footer } from "./components/Footer/Footer"
import { Formulario } from "./pages/Formularios/Formulario"
import { Header } from "./components/Header"
import { Home } from "./pages/Home/Home"
import { Juego } from "./pages/Juego/Juego"
import { Personajes } from "./pages/Personajes/Personajes"
import { routes } from "./config/routes"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.PERSONAJES} element={<Personajes />} />
          <Route path={routes.PERSONAJE} element={<DetailViewPersonaje />} />
          <Route path={routes.EPISODIOS} element={<Episodios />} />
          <Route path={routes.EPISODIO} element={<DetailViewEpisodio />} />
          <Route path={routes.CONTACTO} element={<Formulario />} />
          <Route path={routes.JUEGO} element={<Juego />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
