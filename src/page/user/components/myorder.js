import React, { Component } from 'react';
import '../style/_myorder.scss';
import TitleCard from './title';

// import api from '@/api'
class MyOrder extends Component {
    checkAll(){
        console.log(1111)
    }
    render() {
        return (
            <div className="myorder">
                <TitleCard title="我的订单" checkAll={this.checkAll}/>
                <ul className="myorder-item">
                    <li>
                        <img src={require("@/static/img/user/nopay.png")}/>
                        <span>待付款</span>
                    </li>
                    <li>
                    <img src={require("@/static/img/user/nosend.png")}/>
                        <span>待发货</span>
                    </li>
                    <li>
                        <img src={require("@/static/img/user/noreceive.png")}/>
                        <span>待收货</span>
                    </li>
                    <li>
                    <img src={require("@/static/img/user/comment.png")}/>
                        <span>评价</span>
                    </li>
                    <li>
                        <img src={require("@/static/img/user/refund.png")}/>
                        <span>退货退款</span>
                    </li>
                </ul>
            </div>
                );
              }
            }
            
  export default MyOrder;