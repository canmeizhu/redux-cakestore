import React from 'react';
import Card from './Card';
import '../css/Store.css';

const CakeList = ({cakes, clickEvent, addToCart})=>{
  return (
    <div className='items-container'>
      {cakes.map((cake, index) => (<Card key={index} cake={cake} clickEvent={clickEvent} addToCart={addToCart}/>))}
  </div>
  );
};

export default CakeList;