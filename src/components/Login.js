import React from 'react';
import { Redirect } from 'react-router'
import { Alert } from 'react-bootstrap'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var data = {email: this.refs.email.value, password: this.refs.password.value}
    this.props.logInVerify(data)
  }

  render() {
    return (
      <div className="login-form">

        {this.props.token ? <Redirect to= '/' />:
        <form onSubmit={this.handleSubmit}>
          <h1 className='signIn'>Welcome!</h1>
          <h3 id="login-large-text" className='signIn'>Login below.</h3>

          <label className="login-small-text" htmlFor="email">Email</label>
          <input id="email" ref = "email" name="email" type="email"/>

          <label className="login-small-text" htmlFor="username">Password</label>
          <input id="username" ref = "password" name="username" type="password"/>

        <button id="login-button" label="Submit">Submit</button>

      </form>}

      {this.props.toast ? <div className="login-alert">
        <Alert bsStyle="success">
          <strong>Invalid email or password.</strong>
        </Alert>
      </div> : null}

    </div>
  )
  }

}

export default Login
