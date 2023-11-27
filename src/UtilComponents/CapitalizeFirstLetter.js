import React from "react";

class CapitalizeFirstLetter extends React.Component {
  render() {
    return Capitalize(this.props.text);
  }
}

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default CapitalizeFirstLetter;
