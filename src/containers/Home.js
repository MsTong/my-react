import HomeCom from '../page/user/home'
import { connect } from 'react-redux'
import { setObjArr } from '../actions/setObjArr';
import { setUserInfo } from '../actions/setUserInfo';
// import PropTypes from 'prop-types';
const setObj = (data, filter) => {
  switch (filter) {
    case 'SETOBJARR':
      return data;
    case 'SETUSERINFO':
      return data
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state) => {
  return {
    objArr: setObj(state.objArr, 'SETOBJARR'),
    userInfo: setObj(state.userInfo, 'SETUSERINFO')
  }
}

const mapDispatchToProps = ({
  setObjArr: setObjArr,
  setUserInfo: setUserInfo
})

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCom)

export default Home;
