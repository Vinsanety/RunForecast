import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';

class Navbar extends React.Component {
  render () {
    return (
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <a className="api-docs-link" href="https://openweathermap.org/" target="_blank" title="Visit API Docs" rel="noopener noreferrer">
            <Icon>wb_sunny</Icon>
          </a>
          <a className="navbar-link home-link" href="/">
              Run Forecast
          </a>
          <Link className="navbar-link" to="/weathercam">Weathercams</Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
