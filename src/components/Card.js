import React from 'react';
import '../css/CakeCard.css';
import '../css/Common.css';

const Card = ({cake, clickEvent, addToCart}) => {
  let URL = `img/${cake.url}`;
  return (
    <div className='card' onClick={()=>clickEvent(cake)}>
      <div className="img-section">
        <img src={URL} alt="pic" />
      </div>
      <p className="name">{cake.name}</p>
      <div className="price-section">
        <p className="price">$&nbsp;{cake.price}</p>
      </div>
      <a className="button cartBtn" onClick={(e)=>addToCart(e, cake, 1)}>Add to cart</a>
    </div>
  );
}
export default Card;