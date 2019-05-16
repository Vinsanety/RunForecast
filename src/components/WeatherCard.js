import React from 'react';
import Card from '@material-ui/core/Card';

class WeatherCard extends React.Component {
  render () {
    return (
      <Card>
        <div className="weather-card">
          <h1>{ this.props.city } Current Weather</h1>
          { this.props.city &&
             <p>
              <span className="weather-category">Location:</span> { this.props.city }
            </p>
          }
          { this.props.temperature &&
            <p>
              <span className="weather-category">Temperature:</span> { this.props.temperature }<span className="measurement-unit">&deg;F</span>
              { this.props.icon &&
                  <img className="weather-icon" src={"https://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="Weather icon">
                  </img>
              }
            </p>
          }
          { this.props.humidity &&
            <p>
              <span className="weather-category">Humidity:</span> { this.props.humidity }%
            </p>
          }
          { this.props.description &&
            <p>
              <span className="weather-category">Conditions:</span> { this.props.description }
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
          { this.props.error &&
            <p className="weather-card-error">
              { this.props.error }
            </p>
          }
        </div>
      </Card>
    );
  }
}

export default WeatherCard;
