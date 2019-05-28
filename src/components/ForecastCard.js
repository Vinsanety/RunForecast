import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

class ForecastCard extends React.Component {
  render () {
    const cardForecastData = this.props.forecast;
    return (
      <div className="forecast-card-container">
        { this.props.city &&
          <h1>{ this.props.city } Forecast (5day/3hour)</h1>
        }
        <Grid container spacing={16}>
        {cardForecastData.map((forecastData, index) =>
          <Grid key={index} item xs={12} md={3}>
            <Card className="forecast-weather-card">
              { forecastData.dt_txt &&
                 <p>
                  <span className="weather-category">Time:</span> { forecastData.dt_txt }
                </p>
              }
              { forecastData.main.temp &&
                <p>
                  <span className="weather-category">Temp:</span> { forecastData.main.temp }<span className="measurement-unit">&deg;F</span>
                  { forecastData.weather[0].icon &&
                      <img className="weather-icon" src={"https://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png"} alt="Weather icon">
                      </img>
                  }
                </p>
              }
              { forecastData.main.humidity &&
                 <p>
                  <span className="weather-category">Humidity:</span> { forecastData.main.humidity }
                  <span className="measurement-unit">%</span>
                </p>
              }
              { forecastData.wind.speed &&
                 <p>
                  <span className="weather-category">Wind:</span> { forecastData.wind.speed }
                  <span className="measurement-unit">mph</span>
                </p>
              }
            </Card>
          </Grid>
        )}
        </Grid>
      </div>
    );
  }
}

export default ForecastCard;
