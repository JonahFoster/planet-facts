import { useState, useEffect } from 'react';
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
  // Reset to default options when the planet changes
  useEffect(() => {
    setSelectedTopic("overview");
    setSelectedImage("planet");
  }, [props.planet]);

  // Define possible styles for topic divs
  const topicStylesMap = {
    "Mercury": {
      "overview": { backgroundColor: '#419EBB' },
      "structure": { backgroundColor: '#419EBB' },
      "geology": { backgroundColor: '#419EBB' },
    },
    "Venus": {
      "overview": { backgroundColor: '#EDA249' },
      "structure": { backgroundColor: '#EDA249' },
      "geology": { backgroundColor: '#EDA249' },
    },
    "Earth": {
      "overview": { backgroundColor: '#6D2ED5' },
      "structure": { backgroundColor: '#6D2ED5' },
      "geology": { backgroundColor: '#6D2ED5' },
    },
    "Mars": {
      "overview": { backgroundColor: '#D14C32' },
      "structure": { backgroundColor: '#D14C32' },
      "geology": { backgroundColor: '#D14C32' },
    },
    "Jupiter": {
      "overview": { backgroundColor: '#D83A34' },
      "structure": { backgroundColor: '#D83A34' },
      "geology": { backgroundColor: '#D83A34' },
    },
    "Saturn": {
      "overview": { backgroundColor: '#CD5120' },
      "structure": { backgroundColor: '#CD5120' },
      "geology": { backgroundColor: '#CD5120' },
    },
    "Uranus": {
      "overview": { backgroundColor: '#1EC1A2' },
      "structure": { backgroundColor: '#1EC1A2' },
      "geology": { backgroundColor: '#1EC1A2' },
    },
    "Neptune": {
      "overview": { backgroundColor: '#2D68F0' },
      "structure": { backgroundColor: '#2D68F0' },
      "geology": { backgroundColor: '#2D68F0' },
    },
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
          <div style={selectedTopic === "overview" ? topicStylesMap[props.planet].overview : {}} onClick={() => triggerHandlers("overview", "planet")} className='planet-topic-container'>
            <p className='planet-topic-number'>01</p>
            <p className='planet-topic'>Overview</p>
          </div>
          <div style={selectedTopic === "structure" ? topicStylesMap[props.planet].structure : {}} onClick={() => triggerHandlers("structure", "internal")} className='planet-topic-container'>
            <p className='planet-topic-number'>02</p>
            <p className='planet-topic'>Internal Structure</p>
          </div>
          <div style={selectedTopic === "geology" ? topicStylesMap[props.planet].geology : {}} onClick={() => triggerHandlers("geology", "geology")} className='planet-topic-container'>
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
