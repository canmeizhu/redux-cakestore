import React from 'react';
import '../css/Store.css';
import '../css/Common.css';
import FilterButton from '../containers/FilterButton';
import Search from '../containers/Search';
import VisibleCakes from '../containers/VisibleCakes';
import CakePopup from '../containers/CakePopup';
import CartWindow from '../containers/CartWindow';

const Store = () => (
  <div id='store'>
    <p className='title-left'>Our<span className='title-right'> Store</span></p>
    <div>
      <FilterButton>ALL</FilterButton>
      <FilterButton>SEASONAL</FilterButton>
      <FilterButton>CLASSIC</FilterButton>
      <FilterButton>PIES</FilterButton>
      <FilterButton>INDIVIDUAL</FilterButton>
    </div>
    <Search />
    <VisibleCakes />
    <CakePopup />
    <CartWindow />
  </div>
);

export default Store;