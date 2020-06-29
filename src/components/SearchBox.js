import React from 'react';
import '../css/Store.css';

const SearchBox = ({ changeEvent }) => (
  <div className='search' >
    <span className="search-icon"><i className="fa fa-search"></i></span>
    <input type="text" id="search-text" placeholder='item....' onChange={(e)=>{
      changeEvent(e.target.value);
      }}></input>
  </div>
);

export default SearchBox;

