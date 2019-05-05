const objArr = (state={objArr:[]}, action) => {
    switch (action.type) {
      case 'SETOBJARR':
        return action.data
      default:
        return state
    }
  }
   export default objArr;