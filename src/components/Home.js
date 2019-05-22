import React from 'react';
import Grid from '@material-ui/core/Grid';
import CitySearchWeatherContainer from './CitySearchWeatherContainer.js';

class Home extends React.Component {
  render () {
    return (
      <div className="app-grid home-container">
        <Grid container style={{ padding: '2rem' }}>
          <Grid item xs={12}>
            <CitySearchWeatherContainer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home;
