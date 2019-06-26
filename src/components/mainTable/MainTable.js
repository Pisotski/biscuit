import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './MainTable.scss';

export default class MainTable extends Component {
  // componentDidMount() {
  //   // only fetch data if it does not already exist
  //   const payload = this.props;
  //   console.log(payload.MainTable)
  //   if (!payload.data) payload.MainTable;
  // }
  async componentDidMount() {
    await this.props.getData();
  }

  render() {
    const { MainTable } = this.props;
    const totalEarnings = Math.round(MainTable.reduce((acc, period) => {
      return acc = acc + Number(period.totalearned.substr(1));
    }, 0) * 100) / 100;
    const { id } = MainTable;
    if (!MainTable) return 'Loading async data...';

    return (
      <div className={styles.MainTable}>
        <h1>You earned, ${totalEarnings}, in this period</h1>
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
