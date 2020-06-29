const setFilterState = filter => ({
  type: 'SET_FILTER_STATE',
  filter
});

const setVisibleCakesState = filter =>({
  type: 'SET_VISIBLE_CAKES_STATE',
  filter
});

const setShowPopupState = tureOrFalse=> ({
  type: 'SET_DETAIL_STATE',
  showCakeDetail: tureOrFalse
});

const setCakeDetailState = cake =>({
  type: 'SET_CAKE_DETAIL_STATE',
  cake
});

const setShoppingListState = (cake, num) =>({
  type: 'SET_SHOPPING_LIST_STATE',
  cake,
  num
});

const setShowCartState = tureOrFalse=> ({
  type: 'SET_Show_CART_STATE',
  showCart: tureOrFalse
});

export {setFilterState, setVisibleCakesState, setShowPopupState, setCakeDetailState, setShoppingListState, setShowCartState};