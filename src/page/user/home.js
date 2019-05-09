import React, { Component } from 'react';
import api from '@/api';
import './home.scss';
import UserHeader from './components/userHeader';
import MyOrder from './components/myorder';
import Service from './components/service';
import ShopManagement from './components/shopManagement';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {sid: window.localStorage.getItem('sid') || ''};
    }
    async componentDidMount() {
        const data = await api.post('user/refreshUser', {sid: this.state.sid});
        const data2 = await api.post('user/checkShops', {sid: this.state.sid});
        if (data.data && data.code === 0 && data.state === 1) {
            this.props.setUserInfo(data.data);
        } else {
            alert(data.msg);
        }
        if (data2.data && data.code === 0 && data2.state === 1) {
            console.log(data2.data)
            this.props.setShopsInfo(data2.data);
        } else {
            alert(data.msg);
        }
        console.log((this.props))
    }
  render() {
      return (
      <div className="App">
       <UserHeader userInfo={ this.props.userInfo }/>
       <MyOrder/>
       <Service shopsInfo={ this.props.shopsInfo }/>
       <ShopManagement userInfo={ this.props.userInfo }/>
      </div>
    );
  }
}

export default App;
