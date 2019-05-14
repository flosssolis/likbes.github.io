import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../store/actions/products';
import { price } from '../utils/Form/fixedCategories';

import PageTop from '../utils/PageTop';
import Filters from './Filters';

class Shop extends Component {

  state = {
    grid: '',
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: [],
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getBrands());
    dispatch(getWoods());
  }

  handlePrice = value => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }

    return array;
  }

  handleFilters = (filters, section) => {
    const newFilters = { ...this.state.filters };
    newFilters[section] = filters;

    if (section === 'price') {
      let priceValues = this.handlePrice(filters);
      newFilters[section] = priceValues;
    }

    this.setState({
      filters: newFilters,
    });
  }

  render() {
    const { products, dispatch } = this.props;

    return (
      <>
        <PageTop title="Browse products" />
        <div className="container">
          <div className="shop_wrapper">
            <Filters
              {...products}
              handleFilters={this.handleFilters}
              dispatch={dispatch}
            />
            <div className="right">
              right
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

Shop.propTypes = {
  products: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Shop);
