import React, { useState } from "react"

function Planet() {
  const [query, setQuery] = useState("")
  const [planets, setPlanets] = useState([])

  async function searchPlanet(query) {
    const response = await fetch(
      `https://swapi.dev/api/planets/?search=${query}`
    )
    const data = await response.json()
    setPlanets(data.results)
    console.log(data.results)
  }

  function renderPopulation(population) {
    if (population === "unknown") return <div></div>
    else {
      const iconCount = getIconCount(population)
      const icons = []
      for (let i = 0; i < iconCount; i++) {
        icons.push(<span key={i}>👥</span>)
      }
      console.log(icons)
      return <div>{icons}</div>
    }
  }

  function getIconCount(population) {
    if (population <= 1000) return 1
    else if (population <= 10000) return 2
    else if (population <= 1000000) return 3
    else if (population <= 10000000) return 4
    else if (population <= 100000000) return 5
    else return 6
  }

  return (
    <div>
      <h1>Star Wars</h1>
      <h4>Search for the Planet 🌎</h4>
      <input
        onChange={(e) => {
          const query = e.target.value
          setQuery(query)
        }}
      />
      <button
        onClick={() => {
          searchPlanet(query)
        }}
      >
        Search
      </button>
      {planets.map((planet, i) => {
        return (
          <div key={i}>
            <span>{planet.name}</span> -
            <span>{renderPopulation(planet.population)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Planet
