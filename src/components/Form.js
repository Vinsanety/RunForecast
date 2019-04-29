import React from 'react';
import Input from '@material-ui/core/Input';

class Form extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.getWeather}>
        <Input
          placeholder="City"
          type="text"
          name="city"
        />
        <Input
          placeholder="Country"
          type="text"
          name="country"
        />
        <button className="form-btn">
          Send it!
        </button>
      </form>
    );
  }
}

export default Form;
