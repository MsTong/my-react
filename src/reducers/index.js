import { combineReducers } from 'redux';
import shopsInfo from './shopsInfo';
import userInfo from './userInfo';

const userApp = combineReducers({
  shopsInfo: shopsInfo,
  userInfo: userInfo
})
export default userApp
