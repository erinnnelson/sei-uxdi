import React from 'react';
import './App.css';
import HeroInfo from './components/HeroInfo'
import HeroCarousel from './components/HeroCarousel'
import NavBar from './components/NavBar'
import PreMenu from './PreMenu'
import EntireMenu from './components/EntireMenu'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

import "./App.css";


class App extends React.Component {
  constructor() {
    super()
    this.state = ({

    })
  }

  render() {
    return (
      <div className="App">
        <div id="top"></div>
        <header>
          <HeroInfo />
          <HeroCarousel />
          <NavBar />
          
        </header>
        <main>
          <PreMenu />
          <EntireMenu />
          <AboutUs />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
