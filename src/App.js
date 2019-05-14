import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './components/AppBar.js';
import GetWeatherContainer from './components/GetWeatherContainer.js';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <SearchAppBar />
        <div className="app-grid">
          <Grid container style={{ padding: '2rem' }} spacing={16}>
            <Grid item xs={12}>
              <GetWeatherContainer />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
