const userInfo = (state={userInfo:{}}, action) => {
    switch (action.type) {
      case 'SETUSERINFO':
        return action.data
      default:
        return state
    }
  }
   export default userInfo;