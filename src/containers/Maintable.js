import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainTable from '../components/mainTable';
import loadMainTableData from '../redux/actions/mainTable/MainTable.asyncaction';

const mapStateToProps = state => ({
  MainTable: state.MainTable.mainTableData,
  loading: state.MainTable.loading,
  error: state.MainTable.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData: loadMainTableData
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTable);
