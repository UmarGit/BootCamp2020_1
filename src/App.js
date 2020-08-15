import React from 'react';
import Nav from './Nav' ;
import Body from './Body' ;
import Footer from './Footer' ;
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav header="My First React Js Application"/>
      <Body caption="That's Why I love React !" />
      <Footer footer="Created By"/>
    </div>
  );
}

export default App;
