import React from 'react';
import HeroInfo from './components/HeroInfo'
import Carousel from './components/Carousel'
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
          <Carousel />
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
