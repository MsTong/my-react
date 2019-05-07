import React, { Component } from 'react';
import '../style/_service.scss';
import TitleCard from './title';

// import api from '@/api'
class Service extends Component {
    checkAll(){
        console.log(1111)
    }
    toService() {
        console.log('toService')
    }
    doRegist() {
        console.log('doRegist')
    }
    render() {
        return (
            <div className="service">
                <TitleCard title="常用服务"/>
                <ul className="service-list">
                <li  onClick={this.toService('html/house/mls/track_r.html')}>
                    <img src={require("@/static/img/user/saleLead.png")}/>
                    <span>销售线索</span>
                </li>
                <li onClick={this.doRegist('inviteRM')}>
                    <img src={require("@/static/img/user/inviteRM.png")}/>
                    <span>邀请RM</span>
                </li>
                <li  onClick={this.doRegist('updateRM')}>
                    <img src={require("@/static/img/user/updateRM.png")}/>
                    <span>升级RM</span>
                </li>
                <li onClick={this.toService('/user/rmSelf/purchase')}>
                <img src={require("@/static/img/user/proxy.png")}/>
                    <span>代理商品</span>
                </li>
                <li  onClick={this.toService('html/globalhome/agency-mall/welfare.html')}>
                <img src={require("@/static/img/user/welfare.png")}/>
                    <span>福利商品</span>
                </li>
            </ul>
    </div>
                );
              }
            }
            
  export default Service;