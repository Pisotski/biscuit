import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home.scss';

export default class Home extends Component {

  async componentDidMount() {
    if (!this.props.Home.length) await this.props.getData();
  }

  render() {
    const { Home } = this.props;
    // console.log(this.props.getData());
    if (Home === undefined || !Home.length) return 'Loading async data...';

    const HomeObj = Home[0];
    const {
      id, email, username, avatar
    } = HomeObj;

    return (
      <div className={styles.Home}>
        <h1>
          Greetings,
          {' '}
          { username }
        </h1>
        <p>
          avatar:
          {' '}
          { avatar }

        </p>
        <p>
          id:
          {' '}
          { id }

        </p>
        <p>
          email:
          {' '}
          { email }
        </p>
      </div>
    );
  }
}

// Home.propTypes = {
//   data: PropTypes.shape({
//     text: PropTypes.string
//   }),
// };

// Home.defaultProps = {
//   data: null
// };
