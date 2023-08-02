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
    // for item in data.json, planet Component, feed component prop of object, inside the component reference the prop object
    // Need state for planet, selections on nav bar will trigger function to change the state
    // new planet selection becomes fed to planet component
    // add event listener to each nav list item
  )
}