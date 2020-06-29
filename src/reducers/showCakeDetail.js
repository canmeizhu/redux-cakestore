const showCakeDetail = (state=false, action)=>{
  switch(action.type){
    case 'SET_DETAIL_STATE':
      return action.showCakeDetail;
    default:
      return state;
  }
};

export default showCakeDetail;