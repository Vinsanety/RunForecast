import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import LocalWeatherContainer from './components/LocalWeatherContainer.js';
import Home from './components/Home.js';
import WeatherCamContainer from './components/WeatherCamContainer.js';
import Footer from './components/Footer.js';

const Routes = (
  <Router>
    <div className="nav-routes">
      <ul className="navbar">
        <Navbar />
      </ul>
      <LocalWeatherContainer />
      <Route exact path="/" component={Home} />
      <Route path="/weathercam" component={WeatherCamContainer} />
    </div>
  </Router>
)

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="routes">
          {Routes}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
