import { connect } from 'react-redux'
import { select } from '../actions'
import SelectList from '../components/SelectList'
// import PropTypes from 'prop-types';


const getVisibleTodos = (selectArr, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return selectArr
    case 'SHOW_COMPLETED':
      return selectArr.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return selectArr.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state) => ({
  selectArr: getVisibleTodos(state.selectArr, 'SHOW_ALL')
})

const mapDispatchToProps = ({
  onChangeClick: select
})

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectList)

export default VisibleList
