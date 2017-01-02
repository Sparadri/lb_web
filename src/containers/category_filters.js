// Import React/Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'; // makes sure our action flows all of our reducers

// Import Actions
import { fetchProducts } from '../actions/index';

// Import Utilities
import { buildQueryParams, fetchUrlParams } from '../utilities/fetch_url_params';

// Import React Components
import Label from '../components/label';


class CategoryFilters extends Component {


  constructor(props) {
    super(props);

    this.state = ({ selection: {} });
  }


  componentDidMount() {

    // retrieve url params
    const url_params        = window.location.search;
    const categories_params = fetchUrlParams(window.location.search)["category"];

    // build selected_categories depending on categories params value
    const selected_categories = typeof categories_params === "undefined" ? [] : categories_params.split('-');

    // assign selected categories
    const categories = {};
    Object.keys(this.props.categories).map(function(key) {
      categories[key] = selected_categories.includes(key) ? true : false
    });

    // set state
    this.setState({ selection: categories})

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
    const filter   = 'category';

    // build query string
    const query = buildQueryParams(collection, filter)

    // update url
    window.history.pushState('products', '', query);
    // call the action creator to fetch the products
    this.props.fetchProducts();

  }


  renderList(key) {
      const category = this.props.categories[key];
      return (
        <div
          key={category.id}
          onClick={this.onLabelClick.bind(this, category['id'])}>
          <Label
            {...category}
            isSelected={this.state.selection[key]}/>
        </div>
      )
  }


  render() {
    const that = this;
    return (
      <div className="category-filters">
        <span onClick={this.onAllClick.bind(this)}>
          <Label
            nb_products={this.props.nb_products}
            name='all' />
        </span>
        {Object.keys(this.props.categories).map(function (key) {
            return that.renderList(key)
          })
        }
      </div>
    )
  }
}

// to do: collectioners filters +++ fetch all products +++ pagination

// map application/redux state and returned results will show up as props of categoriesList
// as soon as our application state changes, our component categoriesList will automatically re-render
// function mapStateToProps({ products }) {
//   if (!products) {
//     return {products}
//   }
//   return {
//     categories: products.categories,
//     nb_products: products.nb_products
//   }
// }

// Anything returned from this function will end up as props
// on the FilterList container > so we can now call this.props.selectBook
// it will call our actionCreator
// function mapDispatchToProps(dispatch) {
//   // whenever onLabelClick is called, the result should be passed to all our reducers
//   return bindActionCreators({ fetchProducts }, dispatch);
// }

// we want to return the component WITH data
// Promote FilterList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.

// in this case no need to mapStateToProps as receiving props from product page
export default connect(null, { fetchProducts })(CategoryFilters)
