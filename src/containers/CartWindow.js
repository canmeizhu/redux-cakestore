import {connect} from 'react-redux';
import MyCart from '../components/MyCart';
import {setShowCartState} from '../actions';
import {setShoppingListState} from '../actions';

const mapStateToProps = state => ({
  shoppingList: state.shoppingList,
  trueOrFalse: state.showCart
});

const mapDispatchToProps = dispatch => ({
  closeCart: ()=>dispatch(setShowCartState(false)),
  updateShopping: (cake, num)=>dispatch(setShoppingListState(cake, num))
});

const CartWindow = connect(mapStateToProps, mapDispatchToProps)(MyCart);

export default CartWindow;
