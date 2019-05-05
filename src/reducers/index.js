import { combineReducers } from 'redux'
import select from './select'
import showObjArr from './objArr'

const todoApp = combineReducers({
  nowIndex:select,
  objArr: showObjArr
})
export default todoApp
