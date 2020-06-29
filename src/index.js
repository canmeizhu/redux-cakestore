import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import cakeApp from './reducers/cakeApp';
import { Provider } from 'react-redux';

let store = createStore(cakeApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <div>
//     <App />
//   </div>,
// document.getElementById('root')
// );

