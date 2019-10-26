import React, { Component } from 'react';
import FeaturesList from './FeaturesList';
import FeaturesData from './FeaturesData';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      features: []
    }
  }

  componentDidMount(){
    this.setState({features: FeaturesData})
  }

  render(){
    return (
      <div className="App">
        <h1>react_es6_start</h1>
        <FeaturesList
          features={this.state.features}
        > 
        </FeaturesList>
      </div>
    );
  } 
}


export default App
