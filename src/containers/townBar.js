import { connect } from 'react-redux'
import { select } from '../actions'
import { setObjArr } from '../actions/setObjArr'
// import { setObjArr } from '../actions/setObjArr'
import townStreeBar from '../components/townStreeBar'
// import PropTypes from 'prop-types';

const doSelect = (data, filter) => {
  switch (filter) {
    case 'SELECT':
      return data
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const setObj = (data, filter) => {
  switch (filter) {
    case 'SETOBJARR':
      return data
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state) => ({
  nowIndex: doSelect(state.nowIndex, 'SELECT'),
  objArr: setObj(state.objArr,'SETOBJARR')
})

const mapDispatchToProps = ({
  onChangeClick: select,
  setObjArr: setObjArr
})

const townBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(townStreeBar)

export default townBar
