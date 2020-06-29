import React from 'react'
import '../css/Common.css';

const Button = ({ buttonText, clickEvent }) =>(
    <a href='' className="button" onClick={e => {
        e.preventDefault();
        clickEvent(e.target.text);
      }}
    >
      {buttonText}
    </a>
  );

export default Button;
