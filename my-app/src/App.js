import React, { Component } from 'react';
import Transformers from './images.json';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TransformersCard from './components/TransformersCard';
import Footer from './components/Footer';

class App extends Component {
  // Setting the state for images and score
  state = {
    Transformers
  }

  render() {
    return (
      <Wrapper>
        <Navbar />  
        <Header />
        {this.state.Transformers.map(images => (
          <TransformersCard
            id={images.id}
            key={images.id}
            name={images.name}
            image={images.image}
          />
        ))}
        <Footer /> 
      </Wrapper>
    )
  };
}


export default App;
