const React = require('react')
require('./FeaturesList.css');

const FeaturesList = (props) => {

  const features = props.features.map((feature, index) => {
    return (
    <ul key={index}>
      <li>
        <h3>{feature.name}</h3>
        <p>{feature.description}</p>
        <a href={feature.MDNLink}>📖Documentation</a>
        <h5>Implemented? {feature.isImplemented ? "✅": "❌"}</h5>
        <p>Possible Implementations:</p> 
        <p><code>{feature.implementations}</code></p>
      </li>
    </ul>
    )
  })

  return (
  <div>
    {features}
  </div>
  )


}

module.exports = FeaturesList