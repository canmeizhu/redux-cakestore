import React from 'react';
import '../css/Menubar.css';

const CartIcon = ({totalNum, clickEvent})=>(
  <span className="menuCart-num" onClick={clickEvent}><i className="fa fa-shopping-cart"></i><span className="itemNumber">&nbsp;{totalNum}</span></span>
);

export default CartIcon;