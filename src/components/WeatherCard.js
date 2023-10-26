import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import CapitalizeFirstLetter from '../UtilComponents/CapitalizeFirstLetter.js';

class WeatherCard extends React.Component {
  render () {
    return (
      <div className="weather-card-container">
      <Card className="weather-card">
        { !this.props.formHint &&
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            { this.props.city &&
              <p className="weather-card-location">
                { this.props.city }
              </p>
            }
            { this.props.temperature &&
              <p className="weather-card-data">
                { this.props.temperature }<span className="measurement-unit">&deg;F</span>
                { this.props.icon &&
                  <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="Weather icon">
                  </img>
                }
              </p>
            }
            { this.props.description &&
              <p>
                <CapitalizeFirstLetter text={this.props.description} />
              </p>
            }
          </Grid>
          <Grid item xs={12} sm={6} className="weather-card-meta-data">
            { this.props.humidity &&
              <p>
                <span className="weather-category">Humidity:</span> { this.props.humidity }<span className="measurement-unit">%</span>
              </p>
            }
            { this.props.windSpeed &&
              <p>
                <span className="weather-category">Wind Speed:</span> { this.props.windSpeed }<span className="measurement-unit">mph</span>
              </p>
            }
            { this.props.city &&
              <p>
                <span className="weather-category">Cloudiness:</span> { this.props.cloud }<span className="measurement-unit">%</span>
              </p>
            }
            { this.props.sunrise &&
              <p>
                <span className="weather-category">Sunrise:</span> { this.props.sunrise } <Icon className="sunrise-icon">brightness_5</Icon>
              </p>
            }
            { this.props.sunrise &&
              <p>
                <span className="weather-category">Sunset:</span> { this.props.sunset } <Icon className="sunset-icon">brightness_4</Icon>
              </p>
            }
            </Grid>
          </Grid>
        }
          { this.props.error &&
            <p className="weather-card-error">
              { this.props.error }
            </p>
          }
          { this.props.formHint &&
            <p className="city-weather-form-helper-text">
              { this.props.formHint }
            </p>
          }
        </Card>
      </div>
    );
  }
}

export default WeatherCard;
