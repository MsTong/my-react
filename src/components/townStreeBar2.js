import React from 'react';
import './townStreeBar.scss';
import PropTypes from 'prop-types'
// import api from '../api'

const TownStreeBar = ({itemArr, onChangeClick}) =>(
            <div className="townStreeBar">
                <div className="townStreeBar-item">
                {itemArr.map((item,index) => (
                     <span className={index===this.state.nowIndex?'active':''} onClick={onChangeClick} key={index}>{item}</span>
                ))}
                </div>
                <div className="townStreeBar-info">
                </div>
            </div>
)
TownStreeBar.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    itemArr: PropTypes.arrayOf(
        PropTypes.shape({
          val: PropTypes.string.isRequired,
          status: PropTypes.bool.isRequired,
          item: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
  }

export default TownStreeBar;