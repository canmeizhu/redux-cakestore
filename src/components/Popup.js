import React from 'react';
import '../css/Popup.css';
import '../css/Common.css';

const Popup = ({cakeDetail, trueOrFalse, closePopup, addToCart})=>{
    let URL = `img/${cakeDetail.url}`;
    let cakeInput;
    const plus = ()=>{
      if(cakeInput.value<=98) cakeInput.value++;
    };
    const minus = ()=>{
      if(cakeInput.value>=2) cakeInput.value--;
    };
    return trueOrFalse && (
      <div className="detailWindow">
        <div className="item-detail-container">
          <span className="close-button" onClick={closePopup}><i className="fa fa-close"></i></span>
          <div className="item-detail">
            <div className="item-info">
              <p className="item-name">{cakeDetail.name}</p>
              <div className="wrap">
                <p className="item-price">$&nbsp;{cakeDetail.price}</p>
                <div className="item-number-container">
                  <span className="minus-plus" onClick={minus}><i className="fa fa-minus"></i></span>
                  <input type="number" ref={node => cakeInput = node} min="1" max="99" className="input-number" defaultValue='1'></input>
                  <span className="minus-plus" onClick={plus}><i className="fa fa-plus"></i></span>
                </div>
              </div>
              <a className="button cartBtn" onClick={()=>{
                addToCart(cakeDetail, parseInt(cakeInput.value));
                closePopup();
                }}>Add to cart</a>
            </div>
            <div className="item-img">
              <img src={URL} alt="pic" />
            </div>
          </div>
          <div>
            <span className="item-descrip">Description:&nbsp;</span>
            <span className="font-gray">{cakeDetail.description}</span>
          </div>
          <div>
            <span className="item-descrip">Ingredients:&nbsp;</span>
            <span className="font-gray">{cakeDetail.ingredients}</span>
          </div>
        </div>
      </div>
    );
  };

export default Popup;