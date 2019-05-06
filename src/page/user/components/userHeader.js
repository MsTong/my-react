import React, { Component } from 'react';
import './_userHeader.scss';
import api from '@/api'
class UserHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {userInfo:'ffff',userShops:null,nowRmGrade:'',RmGrade:['普通会员','初级会员','中级会员','高级会员'],sid: window.localStorage.getItem('sid')||''};
    }
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
            <div className="userHeader">
                <div className="userHeader-icon">
                    <span className="userHeader-icon-message"></span>
                    <span className="userHeader-icon-setting"></span>
                </div>
                <div className="userHeader-title">
                    <div className="userHeader-title-userInfo">
                        <img className="userImg" src={require("@/static/img/user/user.jpeg")} alt=""/>
                            <div className="userInfo">
                                <span className="userInfo-username">{this.state.userInfo.name}</span>
                                <span className="userInfo-RMGrade">{this.state.nowRmGrade}</span>
                            </div>
                    </div>
                        <span className="userHeader-title-myproperty">
                            我的资产
                            <i className="arrow"></i>
                        </span>
                </div>
                <div className="userHeader-indentity">
                    {/* <TownBar/> */}
                </div>
            </div>
                );
              }
            }
            
  export default UserHeader;