import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Welcome from './components/Welcome';
import About from './components/About';
import Store from './components/Store';
import Contact from './components/Contact';

const App = ()=>(
    <div className="App">
      <Menubar />
      <Welcome />
      <About />
      <Store />
      <Contact />
    </div>
  );

export default App;
