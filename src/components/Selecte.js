import React from 'react'
import PropTypes from 'prop-types'

const Slecte = ({ onClick, text }) => (
  <span
    onClick={onClick}
    // className={status===this.state.nowIndex?'active':''}
  >
    {text}
  </span>
)

Slecte.propTypes = {
  onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Slecte
