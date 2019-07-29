import React from 'react';
import Carousel from './components/HeroCarousel'
import HeroInfo from './components/HeroInfo'
import HeroCarousel from './components/HeroCarousel'
import NavBar from './components/NavBar'
import PreMenu from './components/PreMenu'
import EntireMenu from './components/EntireMenu'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = ({

    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <HeroInfo />
          <HeroCarousel />
          <NavBar />
        </header>
        <main>
          {/* <PreMenu /> */}
          {/* <EntireMenu /> */}
          {/* <AboutUs /> */}
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </div>
    );
  }
}

export default App;
