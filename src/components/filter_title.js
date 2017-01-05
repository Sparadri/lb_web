import React, { Component } from 'react';


class FilterTitle extends Component {

  constructor(props) {
    super(props);

    // this.state = ({ selected_categories: [] });
  }

  render() {
    return (
      <div className="filter-title">
        {this.props.name}
      </div>
    )
  }
}

export default FilterTitle;
