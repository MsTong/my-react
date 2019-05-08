import { combineReducers } from 'redux';
import showObjArr from './objArr';
import showUserInfo from './userInfo';

const todoApp = combineReducers({
  objArr: showObjArr,
  userInfo: showUserInfo
})
export default todoApp
