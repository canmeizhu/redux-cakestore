import {connect} from 'react-redux';
import CartIcon from '../components/CartIcon';
import {setShowCartState} from '../actions';

const getTotalNumber = cakes =>{
  let sum = 0;
  cakes.forEach(element => {
    sum += element.number;
  });
  return sum;
};

const mapStateToProps = (state)=>({
  totalNum: getTotalNumber(state.shoppingList)
});

const mapDispatchToProps = dispatch =>({
  clickEvent: ()=>dispatch(setShowCartState(true))
});

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartIcon);

export default Cart;