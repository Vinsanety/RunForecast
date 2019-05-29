import React from 'react';
import Card from '@material-ui/core/Card';
import CapitalizeFirstLetter from '../UtilComponents/CapitalizeFirstLetter.js';
import Icon from '@material-ui/core/Icon';

class WeatherCard extends React.Component {
  render () {
    return (
      <div className="weather-card-container">
        { this.props.city &&
          <h1>{ this.props.city } Current Weather</h1>
        }
        <Card className="weather-card">
          { this.props.city &&
             <p>
              <span className="weather-category">Location:</span> { this.props.city }
            </p>
          }
          { this.props.temperature &&
            <p>
              <span className="weather-category">Temp:</span> { this.props.temperature }<span className="measurement-unit">&deg;F</span>
              { this.props.icon &&
                  <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="Weather icon">
                  </img>
              }
            </p>
          }
          { this.props.description &&
            <p>
              <span className="weather-category">Conditions:</span>
                <CapitalizeFirstLetter text={this.props.description} />
              </p>
            }
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
          { this.props.cloud &&
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
