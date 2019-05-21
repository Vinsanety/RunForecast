import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './components/AppBar.js';
import CitySearchWeatherContainer from './components/CitySearchWeatherContainer.js';
import LocalWeatherContainer from './components/LocalWeatherContainer.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <SearchAppBar />
        <LocalWeatherContainer />
        <div className="app-grid">
          <Grid container style={{ padding: '2rem' }}>
            <Grid item xs={12}>
              <CitySearchWeatherContainer />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
