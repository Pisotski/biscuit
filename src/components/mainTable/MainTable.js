import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import SubTable from '../../containers/Subtable';
import styles from './MainTable.scss';
import 'react-table/react-table.css';

export default class MainTable extends Component {

  async componentDidMount() {
    if (!this.props.MainTable.length) await this.props.getData();
  }

  render() {
    const { MainTable } = this.props;
    const totalEarnings = Math.round(MainTable.reduce((acc, period) => {
      return acc = acc + Number(period.totalearned.substr(1));
    }, 0) * 100) / 100;

    const columns = [{
      Header: 'id',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'startperiod',
      accessor: 'startperiod' // String-based value accessors!
    }, {
      Header: 'endperiod',
      accessor: 'endperiod' // String-based value accessors!
    }, {
      Header: 'totalowed',
      accessor: 'totalowed' // String-based value accessors!
    }, {
      Header: 'totalearned',
      accessor: 'totalearned' // String-based value accessors!
    }, {
      Header: 'note',
      accessor: 'note',
    }, {
      Header: 'totalhours',
      accessor: 'totalhours',
    }];

    if (!MainTable) return 'Loading async data...';

    return (
      <div className={styles.MainTable}>
        <h2>You earned, ${totalEarnings}, in this period</h2>
        <ReactTable
          data={MainTable}
          columns={columns}
          SubComponent={row => {
            return (
              <div>
                <SubTable />
              </div>
            )
          }}
        />
      </div>
    );
  }
}

MainTable.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
};

MainTable.defaultProps = {
  data: null
};
