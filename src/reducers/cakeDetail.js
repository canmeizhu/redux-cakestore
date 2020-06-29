const cakeDetail = (state={}, action)=>{
  switch(action.type){
    case 'SET_CAKE_DETAIL_STATE':
      return action.cake;
    default:
      return state;
  }
};

export default cakeDetail;