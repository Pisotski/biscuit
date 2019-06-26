import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import loadHomeData from '../redux/actions/home/Home.asyncaction';

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
)(Home);
