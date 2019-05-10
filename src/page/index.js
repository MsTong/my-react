import React, { Component } from 'react';
import api from '@/api';
import Xls from "./xls";
import {Route,Link} from "react-router-dom";


class Index extends Component {
    render() {
        return (
            <div className="xls">
                <div><Link to='/xls'> index</Link></div>
                <Route exact path="/xls" component={Xls} />
                {this.props.children}
            </div>
        );
    }
}

export default Index;
