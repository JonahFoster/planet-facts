import { useState } from 'react';
import Header from './Header.jsx'
import Planet from './Planet.jsx'

export default function App() {

  const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

  function handlePlanetClick(planet) {
    setSelectedPlanet(planet)
    console.log(selectedPlanet)
  }

  return (
      <div>
      <Header onPlanetClick={handlePlanetClick} />
      <Planet planet={selectedPlanet} />
    </div>
  )
}