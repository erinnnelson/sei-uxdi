import React from 'react';
import Carousel from './components/HeroCarousel'

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
          {/* <HeroInfo /> */}
          <Carousel />
          {/* <NavBar /> */}
        </header>
        <main>
          {/* <PreMenu /> */}
          {/* <Menu /> */}
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
