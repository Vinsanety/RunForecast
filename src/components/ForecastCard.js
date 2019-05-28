import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CapitalizeFirstLetter from '../UtilComponents/CapitalizeFirstLetter.js';
import Icon from '@material-ui/core/Icon';

class ForecastCard extends React.Component {
  render () {
    return (
      <Fragment>
        <h1>{ this.props.name } Forecast (5day/3hour)</h1>
        <Grid container spacing={16}>
          <Grid item xs={12} md={4}>
            <Card className="weather-card">
              { this.props.f1Time &&
                 <p>
                  <span className="weather-category">Time:</span> { this.props.f1Time }
                </p>
              }
              { this.props.f1Temp &&
                <p>
                  <span className="weather-category">Temp:</span> { this.props.f1Temp }<span className="measurement-unit">&deg;F</span>
                  { this.props.f1Icon &&
                      <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.f1Icon + ".png"} alt="Weather icon">
                      </img>
                  }
                </p>
              }
              { this.props.f1Humidity &&
                 <p>
                  <span className="weather-category">Humidity:</span> { this.props.f1Humidity }
                  <span className="measurement-unit">%</span>
                </p>
              }
              { this.props.f1Wind &&
                 <p>
                  <span className="weather-category">Wind:</span> { this.props.f1Wind }
                  <span className="measurement-unit">mph</span>
                </p>
              }
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="weather-card">
              { this.props.f1Time &&
                 <p>
                  <span className="weather-category">Time:</span> { this.props.f1Time }
                </p>
              }
              { this.props.f1Temp &&
                <p>
                  <span className="weather-category">Temp:</span> { this.props.f1Temp }<span className="measurement-unit">&deg;F</span>
                  { this.props.f1Icon &&
                      <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.f1Icon + ".png"} alt="Weather icon">
                      </img>
                  }
                </p>
              }
              { this.props.f1Humidity &&
                 <p>
                  <span className="weather-category">Humidity:</span> { this.props.f1Humidity }
                  <span className="measurement-unit">%</span>
                </p>
              }
              { this.props.f1Wind &&
                 <p>
                  <span className="weather-category">Wind:</span> { this.props.f1Wind }
                  <span className="measurement-unit">mph</span>
                </p>
              }
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="weather-card">
              { this.props.f1Time &&
                 <p>
                  <span className="weather-category">Time:</span> { this.props.f1Time }
                </p>
              }
              { this.props.f1Temp &&
                <p>
                  <span className="weather-category">Temp:</span> { this.props.f1Temp }<span className="measurement-unit">&deg;F</span>
                  { this.props.f1Icon &&
                      <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.f1Icon + ".png"} alt="Weather icon">
                      </img>
                  }
                </p>
              }
              { this.props.f1Humidity &&
                 <p>
                  <span className="weather-category">Humidity:</span> { this.props.f1Humidity }
                  <span className="measurement-unit">%</span>
                </p>
              }
              { this.props.f1Wind &&
                 <p>
                  <span className="weather-category">Wind:</span> { this.props.f1Wind }
                  <span className="measurement-unit">mph</span>
                </p>
              }
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default ForecastCard;
