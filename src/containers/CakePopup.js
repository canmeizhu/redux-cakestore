import {connect} from 'react-redux';
import Popup from '../components/Popup';
import {setShowPopupState} from '../actions';
import { setShoppingListState } from '../actions';

const mapStateToProps = state => ({
  cakeDetail: state.cakeDetail,
  trueOrFalse: state.showCakeDetail
});

const mapDispatchToProps = dispatch => ({
  closePopup: () => dispatch(setShowPopupState(false)),
  addToCart: (cake, num) => dispatch(setShoppingListState(cake, num))
});

const CakePopup = connect(mapStateToProps, mapDispatchToProps)(Popup);

export default CakePopup;