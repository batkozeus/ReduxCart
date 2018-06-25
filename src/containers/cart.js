import { connect } from 'react-redux';
import Cart from '../components/cart';
import {
  getCartProductsWithQuant,
  getTotalAmount
} from '../redux/selectors';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from '../redux/actions';

const mapState = state => ({
  products: getCartProductsWithQuant(state),
  totalAmount: getTotalAmount(state)
});

const mapDispatch = {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
};

export default connect(
  mapState,
  mapDispatch,
)(Cart);
