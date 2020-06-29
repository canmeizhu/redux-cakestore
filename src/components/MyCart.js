import React from 'react';
import '../css/MyCart.css';
import '../css/Popup.css';
import '../css/Common.css';
import CartItem from './CartItem';

const subTotal = (shoppingList) => {
  let totalPrice = 0;
  shoppingList.forEach(element => {
    totalPrice += parseFloat(element.price) * parseInt(element.number);
  });
  return totalPrice.toFixed(2);
};

const MyCart = ({ shoppingList, trueOrFalse, closeCart, updateShopping }) => {
  return trueOrFalse && (
    <div className="detailWindow">
      <div className="cart-container">
        <span className="close-button" onClick={closeCart}><i className="fa fa-close"></i></span>
        <p className='title-left cart-title'>Shopping<span className='title-right cart-title'> Cart</span></p>
        {shoppingList.length === 0 ? <p className="empty-text"> Your cart is empty.</p> : <>
          <div className="shopping-list">
            {
              shoppingList.map((item, index) => {
                return (
                  <CartItem key={index} item={item} updateShopping={updateShopping} />
                )
              })
            }
          </div>
          <div className="subTotal">Subtotal: $<span>{subTotal(shoppingList)}</span></div>
          <a className="button">Checkout</a>
        </>}
      </div>
    </div>
  );
}

export default MyCart;