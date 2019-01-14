import React from 'react';
import './style.css';

function TransformersCard(props) {
  return (
    <div className="container">
      {props.image.map(images => (
        <div className='card'>
          <div className='img-container'>
            <img src={images.image} alt={images.name} key={images.id}/>
          </div>
        </div>
      ))} 
    </div>
    
  )
}

export default TransformersCard;