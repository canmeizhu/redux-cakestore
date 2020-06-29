import { connect } from 'react-redux';
import CakeList from '../components/CakeList';
import { setShowPopupState } from '../actions';
import { setCakeDetailState } from '../actions';
import { setShoppingListState } from '../actions';

const mapStateToProps = state => ({
  cakes: state.visibleCakesList
});

const mapDispatchToProps = (dispatch) => ({
  clickEvent: (cake) => {
    dispatch(setShowPopupState(true));
    dispatch(setCakeDetailState(cake));
  },
  addToCart: (e, cake, num) => {
    e.stopPropagation();
    dispatch(setShoppingListState(cake, num));
  }
});


const VisibleCakes = connect(mapStateToProps, mapDispatchToProps)(CakeList);

export default VisibleCakes;
