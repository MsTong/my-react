import React, {Component} from 'react';
import '../style/_shopManagement.scss';
import TitleCard from './title';

// import api from '@/api'
class ShopManagement extends Component {
    shopjumpUrl() {
        console.log(1111)
    }

    toshopManagement() {
        console.log('toService')
    }
    doRegister() {
        console.log('doRegist')
    }

    render() {
        return (
            <div className="shopManagement">
                <TitleCard title="RM/商家服务"/>
                <ul className="shopManagement-list">
                    <li onClick={this.shopjumpUrl()}>
                        <span>
                          <img src={require("@/static/img/user/hfg.png")}/>
                        </span>
                        <span>商城店铺管理</span>
                        <span></span>
                    </li>
                    <li onClick={this.shopjumpUrl('html/goods/main/registerHfg.html')}>
                    <span>
                      <img src={require("@/static/img/user/hfg.png")}/>
                    </span>
                        <span>商城店铺入驻</span>
                        <span></span>
                    </li>
                    <li onClick={this.shopjumpUrl('html/globalhome/house-owner/theOwner_r.html')}>
        <span>
          <img src={require("@/static/img/user/qqj.png")}/>
        </span>
                        <span>全球家店铺管理</span>
                        <span></span>
                    </li>
                    <li onClick={this.toshopManagement('/user/newRetail/nRShopManagement')}>
        <span>
          <img src={require("@/static/img/user/xls.png")}/>
        </span>
                        <span>新零售店铺管理</span>
                        <span></span>
                    </li>
                    <li onClick={this.doRegister('RM')}>
        <span>
          <img src={require("@/static/img/user/RM.png")}/>
        </span>
                        <span>注册RM门店</span>
                        <span></span>
                    </li>
                    <li onClick={this.doRegister('JZD')}>
        <span>
          <img src={require("@/static/img/user/jzd.png")}/>
        </span>
                        <span>注册街镇代</span>
                        <span></span>
                    </li>
                    <li onClick={this.toshopManagement('/user/jzdlist')}>
        <span>
          <img src={require("@/static/img/user/jzd.png")}/>
        </span>
                        <span>我的街镇代</span>
                        <span></span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ShopManagement;