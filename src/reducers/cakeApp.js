import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import visibleCakesList from './visibleCakesList';
import showCakeDetail from './showCakeDetail';
import cakeDetail from './cakeDetail';
import shoppingList from './shoppingList';
import showCart from './showCart';

const cakeApp = combineReducers({
  visibilityFilter,
  visibleCakesList,
  showCakeDetail,
  cakeDetail,
  shoppingList,
  showCart
});

export default cakeApp;