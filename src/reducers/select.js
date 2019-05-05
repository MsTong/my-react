const select = (state='', action) => {
    switch (action.type) {
      case 'SELECT':
        return action.data
      default:
        return state
    }
  }
   export default select;