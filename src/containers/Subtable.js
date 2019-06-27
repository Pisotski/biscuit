import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SubTable from '../components/subTable';
import loadSubTableData from '../redux/actions/subTable/SubTable.asyncaction';

const mapStateToProps = state => ({
  SubTable: state.SubTable.subTableData,
  loading: state.SubTable.loading,
  error: state.SubTable.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData: loadSubTableData
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubTable);
