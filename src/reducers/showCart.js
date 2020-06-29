const showCart = (state=false, action)=>{
  switch(action.type){
    case 'SET_Show_CART_STATE':
      return action.showCart;
    default:
      return state;
  }
};

export default showCart;