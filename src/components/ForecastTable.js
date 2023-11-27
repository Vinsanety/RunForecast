import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class ForecastCard extends React.Component {
  render() {
    const cardForecastData = this.props.forecast;
    return (
      <div className="forecast-container">
        {this.props.city && (
          <h2>
            {this.props.city} Forecast{" "}
            <span style={{ fontSize: "0.9rem" }}>(5day/3hour)</span>
          </h2>
        )}
        {this.props.city && (
          <Paper className="forecast-table-wrapper">
            <Table className="forecast-table">
              <TableHead className="forecast-table-header">
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Temp</TableCell>
                  <TableCell className="forecast-table-header-humidity">
                    Humidity
                  </TableCell>
                  <TableCell>Wind</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="forecast-table-body">
                {cardForecastData.map((forecastData, index) => (
                  <TableRow key={index}>
                    <TableCell className="forecast-table-date">
                      {new Date(forecastData.dt * 1000).toLocaleString(
                        undefined,
                        {
                          day: "numeric",
                          month: "short",
                          year: undefined,
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </TableCell>
                    <TableCell className="forecast-table-temp">
                      {Math.round(forecastData.main.temp)}
                      <span className="measurement-unit">&deg;F</span>
                      {forecastData.weather[0].icon && (
                        <img
                          className="weather-icon"
                          src={
                            "https://openweathermap.org/img/w/" +
                            forecastData.weather[0].icon +
                            ".png"
                          }
                          alt="Weather icon"
                        ></img>
                      )}
                    </TableCell>
                    <TableCell>
                      {forecastData.main.humidity}
                      <span className="measurement-unit">%</span>
                    </TableCell>
                    <TableCell>
                      {Math.round(forecastData.wind.speed)}
                      <span className="measurement-unit">mph</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </div>
    );
  }
}

export default ForecastCard;
