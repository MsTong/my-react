import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '@/api';
// import Button from 'antd/lib/button';
import { Button } from 'antd';

class Xls extends Component {
    render() {
        return (
            <div className="xls">
                <Link to="/user"><Button type="primary">Button</Button></Link>
               xlsjhgfhgg
                {/* {this.props.children} */}
            </div>
    );
    }
}

export default Xls;
