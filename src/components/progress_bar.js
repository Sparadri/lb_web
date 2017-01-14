import React, { Component } from 'react';

// Import Utilities
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress   from 'material-ui/LinearProgress';


export default class ProgressBar extends Component {
  render() {
    const linear_style = {
      height: '1px',
      backgroundColor: '#f3f2e5'
    };
    if (!this.props.products) {
      return (
        <div className="circular-progress">
          <MuiThemeProvider>
            <LinearProgress color="#93A8AC" mode="indeterminate" style={linear_style}/>
          </MuiThemeProvider>
        </div>
      )
    }
  }
}
