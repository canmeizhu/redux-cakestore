const updateShoppingList = (shoppingList, cake, num)=>{
  //check if cake is in the shoppingList
  let newShoppingList = [...shoppingList];
  debugger;
  let checkCake = newShoppingList.find(item=>item.name===cake.name);
  if(checkCake){
    const index = newShoppingList.indexOf(checkCake);
    checkCake.number += num;
    if(checkCake.number !== 0){
      newShoppingList[index] = checkCake;
      return newShoppingList;
    }
    else{
      newShoppingList.splice(index, 1);
      return newShoppingList;
    }
  }
  else{
    const newCake = {...cake, 'number': num};
    return newShoppingList.concat(newCake);
  }

};

const shoppingList = (state=[],action)=>{
  switch(action.type){
    case 'SET_SHOPPING_LIST_STATE':
      return updateShoppingList(state, action.cake, action.num);
    default:
      return state;
  }
};

export default shoppingList;