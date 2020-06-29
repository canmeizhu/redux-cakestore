import { connect } from 'react-redux';
import Button from '../components/Button';
import {setVisibleCakesState} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  buttonText: ownProps.children
});

const mapDispatchToProps = (dispatch, ownProps)=>({
  clickEvent: (btnText) => dispatch(setVisibleCakesState(btnText))
});

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default FilterButton;