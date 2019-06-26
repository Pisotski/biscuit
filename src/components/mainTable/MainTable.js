import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactTable from 'react-table';

import styles from './MainTable.scss';
import 'react-table/react-table.css';

export default class MainTable extends Component {
  // componentDidMount() {
  //   // only fetch data if it does not already exist
  //   const payload = this.props;
  //   console.log(payload.MainTable)
  //   if (!payload.data) payload.MainTable;
  // }
  async componentDidMount() {

    if (!this.props.MainTable) await this.props.getData();
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
