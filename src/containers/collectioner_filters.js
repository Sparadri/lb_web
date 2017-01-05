// Import React/Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

// Import Actions
import { fetchProducts } from '../actions/index';

// Import Utilities
import { buildQueryParams, fetchUrlParams } from '../utilities/fetch_url_params';

// Import React Components
import CollectionerLabel from '../components/collectioner_label';
import FilterTitle from '../components/filter_title';


class CollectionerFilters extends Component {

  constructor(props) {
    super(props);

    this.state = ({ selection: {} });
  }

  componentDidMount() {

    // retrieve url params
    const url_params        = window.location.search;
    const collectioners_params = fetchUrlParams(window.location.search)["collectioner"];

    // build selected_collectioners depending on collectioners params value
    const selected_collectioners = typeof collectioners_params === "undefined" ? [] : collectioners_params.split('-');

    // assign selected collectioners
    const collectioners = {};
    Object.keys(this.props.collectioners).map(function(key) {
      collectioners[key] = selected_collectioners.includes(key) ? true : false
    });

    // set state
    this.setState({ selection: collectioners})

  }


  onLabelClick(key) {

    // update states
    const selection = this.state.selection;
    selection[key] = !this.state.selection[key];
    this.setState({selection: selection});

    // fetch products
    this.fetchProducts();
  }


  onAllClick() {

    // select filter and update selection
    var selection = this.state.selection;
    Object.keys(selection).forEach(function (key) {
      selection[key] = false;
    })
    // update filter selection layout
    this.setState({ selection })

    // clean url
    window.history.pushState('products', '', '');

    // fetch products
    this.fetchProducts();
  }


  fetchProducts() {

    // retrieve collection from component
    const collection = this.state.selection;
    const filter   = 'collectioner';

    // build query string
    const query = buildQueryParams(collection, filter)

    // update url
    window.history.pushState('products', '', query);
    // call the action creator to fetch the products
    this.props.fetchProducts();

  }


  renderList(key) {
      const collectioner = this.props.collectioners[key];
      return (
        <div
          key={collectioner.id}
          onClick={this.onLabelClick.bind(this, collectioner['id'])}>
          <CollectionerLabel
            {...collectioner}
            isSelected={this.state.selection[key]}/>
        </div>
      )
  }


// <CollectionerLabel
//           nb_products={this.props.nb_products}
//           name='all'/>
  render() {
    const that = this;
    return (

        <div className="collectioner-filters">
          <FilterTitle name={"Collectioners"}/>
          {Object.keys(this.props.collectioners).map(function (key) {
              return that.renderList(key)
            })
          }
        </div>
    )
  }
}

export default connect(null, { fetchProducts })(CollectionerFilters)
