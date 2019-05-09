import HomeCom from '../page/user/home'
import { connect } from 'react-redux'
import { setShopsInfo } from '../actions/setShopsInfo';
import { setUserInfo } from '../actions/setUserInfo';
// import PropTypes from 'prop-types';
const setObj = (data, filter) => {
  switch (filter) {
    case 'SETSHOPSINFO':
      return data;
    case 'SETUSERINFO':
      return data
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state) => {
  return {
    shopsInfo: setObj(state.shopsInfo, 'SETSHOPSINFO'),
    userInfo: setObj(state.userInfo, 'SETSHOPSINFO')
  }
}

const mapDispatchToProps = ({
  setShopsInfo: setShopsInfo,
  setUserInfo: setUserInfo
})

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCom)

export default Home;
