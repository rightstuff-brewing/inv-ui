import React from 'react';
import PropTypes from 'prop-types';
import GoogleButton from 'react-google-button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS,
  pathToJS
} from 'react-redux-firebase';

class Todos extends React.Component {
  static propTypes = {
    todos: PropTypes.object,
    auth: PropTypes.object,
    firebase: PropTypes.object
  };

  state = {
    isLoading: false
  };

  googleLogin = loginData => {
    this.setState({ isLoading: true });
    return this.props.firebase
      .login({ provider: 'google' })
      .then(() => {
        this.setState({ isLoading: false })
        // this is where we might redirect
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log('there was an error', error);
        console.log('error prop:', this.props.authError)  // thanks to connect
      });
  }

  render() {
    const { auth } = this.props;

    if (!isLoaded(auth)) {
      return (
        <div>
          <span>Loading</span>
        </div>
      );
    }

    if (isEmpty(auth)) {
      return (
        <div>
          <span>Login page</span>
          <GoogleButton onClick={this.googleLogin} />
        </div>
      );
    }

    return (
      <p>Welcome {auth.displayName}!</p>
    );
  }
}

export default compose(
  firebaseConnect([
    'todos' // { path: 'todos' }
  ]),
  connect(
    ({ firebase }) => ({
      todos: dataToJS(firebase, 'todos'),
      auth: pathToJS(firebase, 'auth'),
      authError: pathToJS(firebase, 'authError')
    })
  )
)(Todos);