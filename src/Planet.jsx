import data from './data.json'

export default function Planet(props) {
  const planetData = data.find(planet => planet.name === props.planet)

  return (
    <section>
      <div className='planet-main-container'>
        <div className='planet-img-container'>
          <img src={planetData.images.planet} />
        </div>
        <div className='planet-info-container'>
          <h1>{props.planet}</h1>
          <p className='planet-content'>{planetData.overview.content}</p>
          <p className ='source'>Source : <a href={planetData.overview.source} className="wikipedia">Wikipedia</a></p>
          <div className='planet-topic-container'>
            <p className='planet-topic-number'>01</p>
            <p className='planet-topic'>Overview</p>
          </div>
          <div className='planet-topic-container'>
            <p className='planet-topic-number'>02</p>
            <p className='planet-topic'>Internal Structure</p>
          </div>
          <div className='planet-topic-container'>
            <p className='planet-topic-number'>03</p>
            <p className='planet-topic'>Surface Geology</p>
          </div>
        </div>
      </div>
      <div className='planet-facts-container'>
        <div className='planet-fact-box'>
          <p className='planet-fact-title'>Rotation Time</p>
          <p className='planet-fact'>{planetData.rotation}</p>
        </div>
        <div className='planet-fact-box'>
          <p className='planet-fact-title'>Revolution Time</p>
          <p className='planet-fact'>{planetData.revolution}</p>
        </div>
        <div className='planet-fact-box'>
          <p className='planet-fact-title'>Radius</p>
          <p className='planet-fact'>{planetData.radius}</p>
        </div>
        <div className='planet-fact-box'>
          <p className='planet-fact-title'>Average Temp.</p>
          <p className='planet-fact'>{planetData.temperature}</p>
        </div>
        </div>
    </section>
  );
}
