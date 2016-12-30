import React, { Component } from 'react';

class FormNl extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        form newsletter
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value})} />
        value of inut: {this.state.term}
      </div>
    );
  }
}

export default FormNl
