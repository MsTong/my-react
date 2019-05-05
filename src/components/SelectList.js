import React from 'react'
import PropTypes from 'prop-types'
import Selecte from './Selecte'

const SelecteList = ({ selectArr, onChangeClick }) => (
  <ul>
    {/* {selectArr.map((todo,index) =>
      <Selecte
        key={index}
        {...todo}
        onClick={() => onChangeClick(index)}
      />
    )} */}
  </ul>
)

SelecteList.propTypes = {
  selectArr: PropTypes.arrayOf(PropTypes.shape({
    val: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    item: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default SelecteList
