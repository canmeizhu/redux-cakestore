import items from '../items.json';

const getVisibleCakes = (filter) => {
  debugger;
  if(filter==="ALL"){
    return items;
  }
  else if(filter==="SEASONAL"||filter==="CLASSIC"||filter==="PIES"||filter==="INDIVIDUAL"){
    return items.filter(item => item.type.toUpperCase() === filter);
  }
  return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
};

const visibleCakesList = (state=items, action)=>{
  switch(action.type){
    case 'SET_VISIBLE_CAKES_STATE':
      return getVisibleCakes(action.filter);
    default:
      return state;
  }
};

export default visibleCakesList;