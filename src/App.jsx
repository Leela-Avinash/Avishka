import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Body from './components/Body';

function App() {
  return (
    <div className="App bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Header />
        <Navbar />
        <HeroSection />
        <About />
        <WhyUs />
        <Body />
    </div>
  );
}

export default App;
