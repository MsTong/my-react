import React, {Component} from 'react';
import '../style/_shopManagement.scss';
import TitleCard from './title';
import {Link, Route, Router, Switch} from 'react-router-dom';
import Xls from '@/page/xls';
import User from "../../../containers/Home";

// import api from '@/api'
class ShopManagement extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
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
                    {
                        this.props.shopsInfo.isHfShops ?
                            <li onClick={this.shopjumpUrl}>
                                <span>
                                  <img src={require("@/static/img/user/hfg.png")}/>
                                </span>
                                <span>商城店铺管理</span>
                                <span></span>
                            </li>
                            :
                            <li onClick={this.shopjumpUrl}>
                                <span>
                                  <img src={require("@/static/img/user/hfg.png")}/>
                                </span>
                                <span>商城店铺入驻</span>
                                <span></span>
                            </li>
                    }
                    {
                        this.props.userInfo.userCenterInfo && this.props.userInfo.userCenterInfo.memberLevel >= 6 ?
                            <li onClick={this.shopjumpUrl}>
                        <span>
                          <img src={require("@/static/img/user/qqj.png")}/>
                        </span>
                                <span>全球家店铺管理</span>
                                <span></span>
                            </li>
                            : ''
                    }
                    {
                        (this.props.shopsInfo.RMGrade > 1||this.props.shopsInfo.isOtoShops) ?
                            <li onClick={this.toshopManagement(this,'xls')}><Link to="/user/xls">
                            <span>
                              <img src={require("@/static/img/user/xls.png")}/>
                            </span>
                                <span>新零售店铺管理</span>
                                <span></span>
                            </Link></li>
                            : ''
                    }
                    {
                        this.props.shopsInfo.RMGrade == 1 ?
                            <li onClick={this.doRegister}>
                                <span>
                                  <img src={require("@/static/img/user/RM.png")}/>
                                </span>
                                <span>注册RM门店</span>
                                <span></span>
                            </li>
                            : ''
                    }
                    {
                        (!this.props.shopsInfo.townAgent && this.props.shopsInfo.RMGrade===4) || this.props.agentWhite===1?
                            <li onClick={this.doRegister}>
                                <span>
                                  <img src={require("@/static/img/user/jzd.png")}/>
                                </span>
                                <span>注册街镇代</span>
                                <span></span>
                            </li>
                            : ''
                    }
                    {
                        this.props.shopsInfo.townAgent?
                            <li onClick={this.doRegister}>
                                <span>
                                  <img src={require("@/static/img/user/jzd.png")}/>
                                </span>
                                <span>我的街镇代</span>
                                <span></span>
                            </li>
                            : ''
                    }
                </ul>
                <Route exact path="/user/xls" component={Xls}></Route>
                {this.props.children}
            </div>
        );
    }
}

export default ShopManagement;