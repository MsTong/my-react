import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import adaptive from './adaptive'
import { Route, Router, Switch, Redirect, HashRouter  } from 'react-router-dom';
import { createHashHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userApp from './reducers'
// import App from './components/App'
import Index from './page';
import User from './containers/Home';
import { Provider } from 'react-redux'
import Xls from '@/page/xls';
adaptive.desinWidth = 750
adaptive.baseFont = 24
adaptive.scaleType = 1
adaptive.init()
const history = createHashHistory();
//dispatch、subscribe、getStatere、placeReducer 接口返回
let store = createStore(userApp, {},applyMiddleware(thunk));

const Roster = () => (
    <Switch>
        <Route exact path='/user' component={User}/>
        <Route path='/user/xls' component={Xls}/>
    </Switch>
)
function renderPage() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history }>
                <Switch>
                    <Route path='/user' component={Roster}/>
                </Switch>
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
