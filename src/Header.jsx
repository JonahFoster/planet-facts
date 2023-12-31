import './styles/header.css'

export default function Header(props) {

  function handleMobileNav() {
    props.mobileNavFunction(!props.mobileNavStatus)
  }

  return (
    <header>
        <p className="title">The Planets</p>
        <div onClick={handleMobileNav} className='mobile-nav-icon'>
          <img src="\assets\icon-hamburger.svg" alt="Three lines representing the navigation menu."/>
        </div>
        <nav className={`nav-menu ${props.mobileNavStatus ? 'show' : 'hide'}`}>
            <ul>
                <li onClick={() => props.onPlanetClick("Mercury")}>Mercury</li>
                <li onClick={() => props.onPlanetClick("Venus")}>Venus</li>
                <li onClick={() => props.onPlanetClick("Earth")}>Earth</li>
                <li onClick={() => props.onPlanetClick("Mars")}>Mars</li>
                <li onClick={() => props.onPlanetClick("Jupiter")}>Jupiter</li>
                <li onClick={() => props.onPlanetClick("Saturn")}>Saturn</li>
                <li onClick={() => props.onPlanetClick("Uranus")}>Uranus</li>
                <li onClick={() => props.onPlanetClick("Neptune")}>Neptune</li>
            </ul>
        </nav>
    </header>
  )
}