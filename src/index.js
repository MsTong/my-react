import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import adaptive from './adaptive'
import { Route, Router } from 'react-router'
import { createHashHistory } from 'history';
// import Found from './components/Found';
// import Follow from './components/Follow';
// import My from './components/My';
// import MyName from './components/MyName';
// import MySex from './components/MySex';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'
// import App from './components/App'
import User from './containers/Home';
import { Provider } from 'react-redux'
adaptive.desinWidth = 750
adaptive.baseFont = 24
adaptive.scaleType = 1
adaptive.init()
const history = createHashHistory();
//dispatch、subscribe、getStatere、placeReducer 接口返回
// let store = createStore(todoApp, {objArr:{}},applyMiddleware(thunk))
let store = createStore(todoApp, {objArr:{}})
function renderPage() {
    ReactDOM.render(
        <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={ User }>
              {/* <Route path="found" component={ Found }></Route>
              <Route path="follow" component={ Follow }></Route>
              <Route path="my" component={ My }>
                  <Route path=":myname" component={ MyName }></Route>
                  <Route path="mysex" component={ MySex }></Route>
              </Route> */}
          </Route>
      </Router>
      </Provider>, 
        document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
