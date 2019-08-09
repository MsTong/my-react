import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '@/api';
import { Button } from 'antd';

class Order extends Component {
    render() {
        return (
            <div className="order">
                <Link to="/user"><Button type="primary">返回首页</Button></Link>
               订单列表
                {/* {this.props.children} */}
            </div>
    );
    }
}

export default Order;
