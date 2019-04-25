import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './components/AppBar.js';
import PhotoCard from './components/PhotoCard.js';

class App extends Component {
  render () {
    return (
      <div className="App">
        <SearchAppBar />
        <div className="App-Grid">
          <Grid container style={{ padding: '2rem' }} spacing={16}>
            <Grid item xs={12} sm={12} md={4}>
              <PhotoCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PhotoCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PhotoCard />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
