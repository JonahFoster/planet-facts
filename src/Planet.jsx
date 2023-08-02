import data from './data.json'

export default function Planet(props) {
  const planetData = data.find(planet => planet.name === props.planet)

  return (
    <div>
        <h1>{props.planet}</h1>
        <p>{planetData.overview.content}</p>
        <p>Source :<a href={planetData.overview.source}> Wikipedia</a></p>
        <p>01</p>
        <h2>Overview</h2>
        <p>02</p>
        <h2>Internal Structure</h2>
        <p>03</p>
        <h2>Surface Geology</h2>
        <img src={planetData.images.planet} />
        <p>Rotation Time</p>
        <p>{planetData.rotation}</p>
        <p>Revolution Time</p>
        <p>{planetData.revolution}</p>
        <p>Radius</p>
        <p>{planetData.radius}</p>
        <p>Average Temp.</p>
        <p>{planetData.temperature}</p>
    </div>
  );
}
