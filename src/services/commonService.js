const API_URL = "https://rickandmortyapi.com/api"

const options = {
  headers: { "Content-Type": "application/json", Accept: "application/json" },
}

export const getPersonajes = async () => {
  const data = await fetch(`${API_URL}/character/`, options)
  const { results } = await data.json()
  return results
}

export const getDetailPersonaje = async (id) => {
  const response = await fetch(`${API_URL}/character/${id}`, options)
  const data = await response.json()
  return data
}

export const getEpisodios = async () => {
  const data = await fetch(`${API_URL}/episode/`, options)
  const { results } = await data.json()
  return results
}

export const getDetailEpisodio = async (id) => {
  const response = await fetch(`${API_URL}/episode/${id}`, options)
  const data = await response.json()
  return data
}
