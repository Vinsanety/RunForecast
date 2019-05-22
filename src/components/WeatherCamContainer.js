import React from 'react';
import Grid from '@material-ui/core/Grid';

class WeatherCamContainer extends React.Component {
  render () {
    return (
      <div className="app-grid weather-cam-container">
        <Grid container style={{ padding: '2rem' }}>
          <Grid item xs={12}>
            <h1>Weathercams</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default WeatherCamContainer;
