import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Featured from './Components/Featured';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Featured/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
