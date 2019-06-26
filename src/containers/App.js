import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = (state = {}, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
