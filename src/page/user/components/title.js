import React, { Component } from 'react';
import './title.scss';
class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="titleCard">
                <p class="titleCard-title">
                    <span>{this.props.title}</span>
                    <span class="checkAll" >
                    <span>查看全部</span>
                    <span class="regspanstBtn"></span>
                </span>
            </p>
    </div>
        );
    }
}
export default Title;