import { useState } from "react"
import { NavLink } from "react-router-dom"

import { routes } from "../../config/routes"
import "./Header.css"

const links = [
  [routes.HOME, "Home"],
  [routes.PERSONAJES, "Personajes"],
  [routes.EPISODIOS, "Episodios"],
  [routes.JUEGO, "Juego"],
  [routes.CONTACTO, "Contacto"],
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  return (
    <header>
      <button className={`nav-btn ${isOpen ? "open" : ""}`} onClick={toggle}>
        <span className="line"></span>
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {links.map(([route, label]) => (
            <li key={label}>
              <NavLink className="nav-link" to={route} onClick={close}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
