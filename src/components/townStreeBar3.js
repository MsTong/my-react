import React, { Component } from 'react';
import './townStreeBar.scss';
import api from '../api'

class TownStreeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {sid: window.localStorage.getItem('sid'),nowIndex:0,townStreeBar: ['城代','片代','街镇代'],obj:[{state:false,val:'',item:'城代'},{state:false,val:'',item:'片代'},{state:false,val:'',item:'街镇代'}]};
    }
    changeItem(index) {
        this.setState({nowIndex: index})
    }
    async componentDidMount() {
        const data = await api.post('user/checkShops', {sid: this.state.sid})
        if (data.data && data.code === 0 && data.state === 1) {
            if(data.data.townAgent) {
                this.state.obj[2] = {state:true,val:data.data.townAgent.townName,item:'街镇代'}
                this.setState({nowIndex: 2})
                this.setState({obj: this.state.obj})
            }
            if(data.data.regionAgent) {
                this.state.obj[1] = {state:true,val:data.data.regionAgent.regionName,item:'片代'}
                if(!this.state.nowIndex) {
                    this.setState({nowIndex: 1})
                }
                this.setState({obj: this.state.obj})
            }
            if(data.data.cityAgent) {
                this.state.obj[0] = {state:true,val:data.data.cityAgent.cityName,item:'城代'}
                if(!this.state.nowIndex) {
                    this.setState({nowIndex: 0})
                }
                this.setState({obj: this.state.obj})
            }
          } 
    }
    
    render() {
        let item = this.state.townStreeBar.map((item,index) => {
            return <span className={index===this.state.nowIndex?'active':''} onClick={this.changeItem.bind(this,index)} key={index}>{item}</span>
        })
        const obj = this.state.obj[this.state.nowIndex]
        let sps = null
        if(obj.state) {
            sps = <p>你是{obj.val}{obj.item}</p>
         } else {
             sps = <p>你还不是{obj.val}{obj.item}</p>
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