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
              <span>Location:</span> { this.props.city }
            </p>
          }
          { this.props.temperature &&
            <p>
              <span>Temperature:</span> { this.props.temperature }&deg;F
            </p>
          }
          { this.props.description &&
            <p>
              <span>Description:</span> { this.props.description }
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
