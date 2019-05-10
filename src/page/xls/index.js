import React, { Component } from 'react';
import api from '@/api';
// import Button from 'antd/lib/button';
import { Button } from 'antd';

class Xls extends Component {
    render() {
        return (
            <div className="xls">
                <Button type="primary">Button</Button>
               xlsjhgfhgg
                {this.props.children}
            </div>
    );
    }
}

export default Xls;
