import { useState } from 'react';
import data from './data.json'

export default function Planet(props) {

  const planetData = data.find(planet => planet.name === props.planet)
  const [selectedTopic, setSelectedTopic] = useState("overview");
  const [selectedImage, setSelectedImage] = useState("planet");

  function triggerHandlers(topic, planetImage) {
    handleSelectedTopic(topic)
    handleSelectedImage(planetImage)
  }

  function handleSelectedTopic(topic) {
    setSelectedTopic(topic)
  }

  function handleSelectedImage(planetImage) {
    setSelectedImage(planetImage)
  }

  return (
    <section>
      <div className='planet-main-container'>
        <div className='planet-img-container'>
          <img className='planet-img' src={planetData.images[selectedImage]} alt={`A low-resolution, drawn image of ${props.planet}`}/>
        </div>
        <div className='planet-info-container'>
          <h1>{props.planet}</h1>
          <p className='planet-content'>{planetData[selectedTopic].content}</p>
          <p className ='source'>Source : <a href={planetData[selectedTopic].source} className="wikipedia">Wikipedia</a></p>
          <div onClick={() => triggerHandlers("overview", "planet")} className='planet-topic-container'>
            <p className='planet-topic-number'>01</p>
            <p className='planet-topic'>Overview</p>
          </div>
          <div onClick={() => triggerHandlers("structure", "internal")} className='planet-topic-container'>
            <p className='planet-topic-number'>02</p>
            <p className='planet-topic'>Internal Structure</p>
          </div>
          <div onClick={() => triggerHandlers("geology", "geology")} className='planet-topic-container'>
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
