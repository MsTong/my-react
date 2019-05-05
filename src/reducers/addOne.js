const addOne = (state=0, action) => {
    switch (action.type) {
      case 'ADD_ONE':
        return state + action.playload
      default:
        return state
    }
  }
   export default addOne;