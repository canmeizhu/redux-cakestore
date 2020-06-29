import React from 'react';
import '../css/CartItem.css';
import '../css/Common.css';

const CartItem = ({item, updateShopping}) => {
  let URL = `img/${item.url}`;
  return (
    <div className="cake-info" key={item.name}>
      <div className="cake-img">
        <img src={URL} alt="pic" />
      </div>
      <p className="cake-name">{item.name}</p>
      <p className="cake-price">$&nbsp;{item.price}</p>
      <div className="cake-number-container">
        <span className="minus-plus" onClick={()=>{updateShopping(item, -1)}}><i className="fa fa-minus"></i></span>
        <input type="number" min="1" max="99" className="input-number" value={item.number} disabled></input>
        <span className="minus-plus" onClick={()=>{updateShopping(item, 1)}}><i className="fa fa-plus"></i></span>
      </div>
    </div>
  );
}

export default CartItem;