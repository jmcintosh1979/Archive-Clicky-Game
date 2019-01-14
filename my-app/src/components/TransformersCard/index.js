import React from 'react';
import './style.css';

function TransformersCard(props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img src={props.image} alt={props.name} className="ind-img"/>
      </div>
    </div>
  )
}

export default TransformersCard;