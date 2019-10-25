// const React = require('react')
// require('./FeaturesList.css');

import React from 'react'
import('./FeaturesList.css');

// const FeaturesList = (props) => {
  
  const FeaturesList = ({ features }) => {

//  const featuresLists = features.map((feature, index) => {

  const featuresLists = features.map((feature, index) => {
    const {name, description, MDNLink, isImplemented, implementations} = feature;
    return (
    <ul key={index}>
      <li>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={MDNLink}>📖Documentation</a>
        <h5>Implemented? {isImplemented ? "✅": "❌"}</h5>
        <p>Possible Implementations:</p> 
        <p><code>{implementations}</code></p>
      </li>
    </ul>
    )
  })

  return (
  <div>
    {featuresLists}
  </div>
  )


}

export default FeaturesList;
