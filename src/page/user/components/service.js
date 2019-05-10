import React, { Component } from 'react';
import '../style/_service.scss';
import TitleCard from './title';
import config from '@/api/config';
import src1 from "@/static/img/user/attention.png";
import src2 from "@/static/img/user/invite.png";
import src3 from "@/static/img/user/addressList.png";
import src4 from "@/static/img/user/bankCard.png";
import src5 from "@/static/img/user/location.png";
import src6 from "@/static/img/user/tuan.png";
// import api from '@/api'
class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList: [
                {
                    name: "我的关注",
                    imgSrc: src1,
                    jumpUrl: "html/mall/myFollow.html"
                },
                {
                    name: "邀请好友",
                    imgSrc: src2,
                    jumpUrl: "showCode"
                },
                {
                    name: "通讯录邀约",
                    imgSrc: src3,
                    jumpUrl: "doAddressList"
                },
                {
                    name: "银行卡管理",
                    imgSrc: src4,
                    jumpUrl: "html/bankcard.html?parent=1"
                },
                {
                    name: "地址管理",
                    imgSrc: src5,
                    jumpUrl: "html/home/#/orderForm?one=1"
                },
                {
                    name: "我的团购",
                    imgSrc: src6,
                    jumpUrl: "html/house/airClass/MyCollage.html"
                }
            ]
        }
    }
    checkAll(){
        console.log(1111)
    }
    toService(url) {
        window.location.href = config.linkApi + url;
    }
    doRegist() {
        console.log('doRegist')
    }
    render() {
        let serviceList = this.state.serviceList.map((item, index)=> {
            return  <li onClick={this.toService.bind(this,item.jumpUrl)} key={index}><img src={item.imgSrc}/> <span>{item.name}</span> </li>
        })
        return (
            <div className="service">
                <TitleCard title="常用服务"/>
                <ul className="service-list">
                    {serviceList}
                    {
                        this.props.shopsInfo.RMGrade>1?
                            <li  onClick={this.toService.bind(this,'')}>
                                <img src={require("@/static/img/user/saleLead.png")}/>
                                <span>销售线索</span>
                            </li>
                            :''
                    }
                    {
                        this.props.shopsInfo.RMGrade > 1 ?
                            <li onClick={this.doRegist}>
                                <img src={require("@/static/img/user/inviteRM.png")}/>
                                <span>邀请RM</span>
                            </li>
                            : ''
                    }
                    {
                        this.props.shopsInfo.RMGrade > 1&&this.props.shopsInfo.RMGrade < 4 ?
                            <li  onClick={this.doRegist}>
                                <img src={require("@/static/img/user/updateRM.png")}/>
                                <span>升级RM</span>
                            </li>
                            : ''
                    }
                    {
                        this.props.shopsInfo.RMGrade > 1 ?
                            <li onClick={this.toService}>
                            <img src={require("@/static/img/user/proxy.png")}/>
                                <span>代理商品</span>
                            </li>
                            : ''
                    }
                    {
                        this.props.shopsInfo.RMGrade > 1 ?
                            <li  onClick={this.toService}>
                            <img src={require("@/static/img/user/welfare.png")}/>
                                <span>福利商品</span>
                            </li>
                            : ''
                    }
            </ul>
                {this.props.children}
    </div>
                );
              }
            }
            
  export default Service;