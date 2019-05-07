import React, { Component } from 'react';
import api from '../../../api'
import './home.scss';
import UserHeader from './components/userHeader';
import MyOrder from './components/myorder';
import Service from './components/service';
import ShopManagement from './components/shopManagement';

class App extends Component {
    async componentDidMount() {
        const data = await api.post('user/refreshUser', {sid: this.state.sid});
        const data2 = await api.post('user/checkShops', {sid: this.state.sid});
        if (data.data && data.code === 0 && data.state === 1) {
            this.setState({'userInfo':data.data.userCenterInfo});
        } else {
            alert(data.msg);
        }
        if (data2.data && data.code === 0 && data2.state === 1) {
            this.setState({'userShops':data2.data});
            this.setState({'nowRmGrade':this.state.RmGrade[data2.data.RMGrade-1]});
        } else {
            alert(data.msg);
        }

    }
  render() {
    return (
      <div className="App">
       <UserHeader/>
       <MyOrder/>
       <Service/>
       <ShopManagement userShops={this.state.userShops}/>
      </div>
    );
  }
}

export default App;
