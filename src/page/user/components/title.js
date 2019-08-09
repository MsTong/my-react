import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './title.scss';
class Title extends Component {
    constructor(props) {
        super(props);
    }
    checkAll=()=>{
        this.props.checkAll();
    }
    render() {
        let title;
        if(this.props.title==='我的订单') {
            title = <p className="titleCard-title">
                <span>{this.props.title}</span>
                <span className="checkAll" onClick={this.checkAll}>
                    <Link to="/orderList">
                    <span>查看全部</span>
                    <span className="regspanstBtn"></span>
                    </Link>
                </span>
            </p>;
        } else {
            title =  <p className="titleCard-title">
                <span>{this.props.title}</span>
            </p>;
        }
        return (
            <div className="titleCard">
                {title}
    </div>
        );
    }
}
export default Title;