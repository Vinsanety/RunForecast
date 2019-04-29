import React from 'react';

import Card from '@material-ui/core/Card';

class WeatherCard extends React.Component {
  render () {
    return (
      <Card>
        { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
        { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
        { this.props.description && <p>Description: { this.props.description }</p>}
        { this.props.error && <p> { this.props.error }</p> }
      </Card>
    );
  }
}

export default WeatherCard;
