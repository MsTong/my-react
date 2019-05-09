const shopsInfo = (state={shopsInfo:{a:'ssss'}}, action) => {
    switch (action.type) {
      case 'SETSHOPSINFO':
        return action.data
      default:
        return state
    }
  }
   export default shopsInfo;