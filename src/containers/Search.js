import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { setVisibleCakesState } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    changeEvent: (inputText) => dispatch(setVisibleCakesState(inputText))
  };
};

const Search = connect(() => ({}), mapDispatchToProps)(SearchBox);

export default Search;