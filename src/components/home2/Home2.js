import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home2.scss';

export default class Home2 extends Component {
  componentDidMount() {
    // only fetch data if it does not already exist
    const payload = this.props;
    console.log(payload.Home);
    if (!payload.data) payload.Home;
  }

  render() {
    const { Home } = this.props;
    const { id, email, username, avatar } = Home;
    if (!Home) return 'Loading async data...';

    return (
      <div className={styles.Home2}>
        <h1>Greetings, { username }</h1>
        <p>
          avatar: { avatar }

        </p>
        <p>
          id: { id } 
 
        </p>
        <p>
          email: { email } 
        </p>
      </div>
    );
  }
}

Home2.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

Home2.defaultProps = {
  data: null
};
