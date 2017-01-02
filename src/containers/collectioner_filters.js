import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { selectCategory } from '../actions/index';

import Label from '../components/label';

class CollectionerFilters extends Component {

  constructor(props) {
    super(props);

    this.state = ({ selection: {} });
  }

  componentDidMount() {
    const collectioners = {}
    Object.keys(this.props.collectioners).map(function (key) {
      collectioners[key] = false;
    })
    this.setState({ selection: collectioners})
  }

  selectCategory(key) {
    const collection = this.state.selection;
    collection[key] = !this.state.selection[key];
    this.setState({selection: collection})
    console.log(this.state.selection);
    // this.state.selected_categories;
  }

  renderList(key) {
      const collectioner = this.props.collectioners[key];
      return (
        <div key={collectioner.id}>
          <Label
            {...collectioner}
            isSelected={this.state.selection[key]}
            selectCategory={this.selectCategory.bind(this)}/>
        </div>
      )
  }

  render() {
    const that = this;
    return (
      <ul className="collectioner-filters">
        <span className="title">Collectioners</span>
        <Label
          nb_products={this.props.nb_products}
          name='all'/>
        {Object.keys(this.props.collectioners).map(function (key) {
            return that.renderList(key)
          })
        }
      </ul>
    )
  }
}

function mapStateToProps({ products }) {
  if (!products) {
    return {products}
  }
  return {
    collectioners: products.collectioners,
    nb_products: products.nb_products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory: selectCategory}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionerFilters)
