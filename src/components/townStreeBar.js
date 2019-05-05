import React, { Component } from 'react';
import './townStreeBar.scss';
import api from '../api'
class TownStreeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {sps:null,sid: window.localStorage.getItem('sid'),nowIndex:0,townStreeBar: ['城代','片代','街镇代'],obj:[{state:false,val:'',item:'城代'},{state:false,val:'',item:'片代'},{state:false,val:'',item:'街镇代'}]};
        this.changeItem = this.changeItem.bind(this)
    }
    changeItem(index,tempArr) {
        this.props.onChangeClick(index)
    }
    async componentDidMount() {
        const data = await api.post('user/checkShops', {sid: this.state.sid})
        let tempArr = [{val:'',item:'城代',status:false},{val:'',item:'片代',status:false},{val:'',item:'街镇代',status:false}]
        if (data.data && data.code === 0 && data.state === 1) {
            if(data.data.townAgent) {
                tempArr[2] = {state:true,val:data.data.townAgent.townName,item:'街镇代'}
                this.changeItem(2,tempArr)
            }
            if(data.data.regionAgent) {
                tempArr[1] = {state:true,val:data.data.regionAgent.regionName,item:'片代'}
                if(!this.props.nowIndex) {
                this.changeItem(1,tempArr)
                }
            }
            if(data.data.cityAgent) {
                tempArr[0] = {state:true,val:data.data.cityAgent.cityName,item:'城代'}
                if(!this.props.nowIndex) {
                this.changeItem(0,tempArr)
                }
            }
            this.props.setObjArr(tempArr)
          } 

    }
    
    render() {
        let item = this.props.objArr.map((item,index) => {
                return <span className={index===this.props.nowIndex?'active':''} onClick={this.changeItem.bind(this,index)} key={index}>{item.item}</span>
        })
        const obj = this.props.objArr[this.props.nowIndex]
        let sps = null
        if(!!obj) {
            if(obj.state) {
                sps = <p>你是{obj.val}{obj.item}</p>
                } else {
                    sps = <p>你还不是{obj.val}{obj.item}</p>
                }
        }
        return (
                <div className="townStreeBar">
                    <div className="townStreeBar-item">
                        {item}
                    </div>
                    <div className="townStreeBar-info">
                        {sps}
                    </div>
                </div>
        )
    }
}
export default TownStreeBar;