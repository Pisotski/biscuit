import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home2 from '../components/home2';
import loadHomeData from '../redux/actions/home2/Home.asyncaction';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     data: state.home
//   };
// }
const mapStateToProps = state => ({
  Home: state.Home.homeData,
  loading: state.Home.loading,
  error: state.Home.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData: loadHomeData
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home2);
