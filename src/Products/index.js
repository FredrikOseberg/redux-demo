import { connect } from 'react-redux';
import Products from './Products';

import { addProduct, removeProduct } from '../actions/productsActions';

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product)),
  removeProduct: id => dispatch(removeProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
