import React, { Component } from 'react';
import Transformers from './images.json';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import TransformersCard from './components/TransformersCard';

class App extends Component {
  // Setting the state for images and score
  state = {
    Transformers
  }

  render() {
    return (
      <Wrapper>
      <Title>Transformers Clicky Game</Title>
        {this.state.Transformers.map(images => (
          <TransformersCard
            id={images.id}
            key={images.id}
            name={images.name}
            image={images.image}
          />
        ))} 
      </Wrapper>
    )
  };
}


export default App;
