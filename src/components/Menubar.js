import React from 'react';
import Logo from './Logo';
import Cart from '../containers/Cart';

const Menubar = () => (
  <div className='menuBar flexBox'>
    {/* React中img不能像html那样直接使用svg图片，而是要另外做一个ReactJS控件，把svg中的代码拷贝进去
    <a href=''><img src='../src/img/logo.svg' alt='logo'></img></a> */}
    <div className='flexBox'>
      {/* <a href=''><Logo /></a> */}
      <Logo />
      <div className='menuContainer flexBox'>
        <a href='' className='menuText'>Home</a>
        <a href='#about' className='menuText'>About</a>
        <a href='#store' className='menuText'>Store</a>
        <a href='#contact' className='menuText'>Contact</a>
      </div>
    </div>
    <div className='menuCart flexBox'>
      <div className="tel">
        <span className="menuCart-img"><i className="fa fa-phone"></i></span>
        <p>123 456 789</p>
      </div>
      <Cart />
    </div>
  </div>)

export default Menubar;