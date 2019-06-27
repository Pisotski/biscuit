import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactTable from 'react-table';

import styles from './SubTable.scss';
import 'react-table/react-table.css';

export default class SubTable extends Component {
  async componentDidMount() {
    console.log(this.props.SubTable);
    if (!this.props.SubTable.length) await this.props.getData();
  }

  render() {
    // const currentPeriod = this.props.SubTable.periodid;
    const columns = [{
      Header: 'id',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'Sales',
      accessor: 'totalsales' // String-based value accessors!
    }, {
      Header: 'Tip Out',
      accessor: 'tipout' // String-based value accessors!
    }];

    if (!SubTable) return 'Loading async data...';

    return (
      <div className={styles.SubTable}>
        <h2>Earnings</h2>
        <ReactTable
          data={this.props.SubTable}
          columns={columns}
        />
      </div>
    );
  }
}

SubTable.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
};

SubTable.defaultProps = {
  data: null
};
