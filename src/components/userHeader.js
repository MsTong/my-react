import React, { Component } from 'react';
import './userHeader.scss';
// import TownStreeBar from './townStreeBar'
import TownBar from '../containers/t ownBar'
// import api from '../api'
class UserHeader extends Component {
    
    render() {
        return (
            <div className="userHeader">
                <div className="userHeader-icon">
                    <span className="userHeader-icon-message"></span>
                    <span className="userHeader-icon-setting"></span>
                </div>
                <div className="userHeader-title">
                    <div className="userHeader-title-userInfo">
                        <img className="userImg" src={require("../static/img/user/user.jpeg")} alt=""/>
                            <div className="userInfo">
                                <span className="userInfo-username">ssss</span>
                                <span className="userInfo-RMGrade">wwww</span>
                            </div>
                    </div>
                        <span className="userHeader-title-myproperty">
                            我的资产
                            <i className="arrow"></i>
                        </span>
                </div>
                <div className="userHeader-indentity">
                    <TownBar/>
                </div>
            </div>
                );
              }
            }
            
  export default UserHeader;