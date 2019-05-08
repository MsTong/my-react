const objArr = (state={objArr:{a:'ssss'}}, action) => {
    switch (action.type) {
      case 'SETOBJARR':
        return action.data
      default:
        return state
    }
  }
   export default objArr;