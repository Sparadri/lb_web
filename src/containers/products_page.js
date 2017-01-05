import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions
import { fetchProducts } from '../actions/index';

// Import Containers
import ProductList from './product_list';
import CategoryFilters from './category_filters';
import CollectionerFilters from './collectioner_filters';

// Import Components
import FilterTitle from '../components/filter_title';
import NewsletterForm from '../components/newsletter_form';



class ProductsPage extends Component {


  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // why is he taking care of getting back the products?
    const query = window.location.search;
    this.props.fetchProducts(query);
    window.addEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    let ScrollTop = document.body.scrollTop;

    if ( document.body.scrollTop > 100 ) {
      document.getElementById('filters').className = "filters-fixed";
    } else {
      document.getElementById('filters').className = "margin-top-100";
    }
  }


  render() {
    if (!this.props.products) {
      return <div>no products</div>;
    }

        // <CollectionerFilters/>
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-9">
            <div className="margin-top-100">
              <ProductList/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="margin-top-100" id='filters'>
              <CategoryFilters
                categories={this.props.categories}
                nb_products={this.props.nb_products}
                />
              <div className="margin-top-30">
                <CollectionerFilters
                  collectioners={this.props.collectioners}
                  nb_products={this.props.nb_products} />
              </div>
              <div className="newsletter-form margin-top-30">
                <FilterTitle name={"Subscribe to Newsletter"}/>
                <NewsletterForm/>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


function mapStateToProps({ products, collections }) {
  if (!products) {
    return {products}
  }
  return {
    categories:    products.categories,
    collectioners: products.collectioners,
    current_user:  products.current_user,
    nb_products:   products.nb_products,
    products:      products.products
 };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);
