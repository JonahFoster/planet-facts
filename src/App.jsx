import { useState } from 'react';
import Header from './Header.jsx'
import Planet from './Planet.jsx'

export default function App() {

  const [selectedPlanet, setSelectedPlanet] = useState("Mercury");
  const [mobileNav, setMobileNav] = useState(false)

  function handlePlanetClick(planet) {
    setSelectedPlanet(planet)
    setMobileNav(false)
    console.log(selectedPlanet)
  }

  return (
    <div style={{ backgroundImage: 'url(/assets/background-stars.svg)' }}>
      <Header mobileNavStatus={mobileNav} mobileNavFunction={setMobileNav} onPlanetClick={handlePlanetClick} />
      <Planet planet={selectedPlanet} />
    </div>
  )
}