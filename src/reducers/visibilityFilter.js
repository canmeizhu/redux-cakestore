const visibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER_STATE':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;