import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home.scss';

export default class Home extends Component {

  async componentDidMount() {
    await this.props.getData();
  }

  render() {

    const { Home } = this.props;

    if (!Home) return 'Loading async data...';
    const {
      id, email, username, avatar
    } = Home;

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

Home.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
};

Home.defaultProps = {
  data: null
};
