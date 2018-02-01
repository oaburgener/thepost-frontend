import React from 'react';
import { Redirect } from 'react-router'
import { Alert } from 'react-bootstrap'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var data = {firstName: this.refs.first_name.value, lastName: this.refs.last_name.value, email: this.refs.email.value, password: this.refs.password.value}
    this.props.SignUpVerify(data)
  }

  render() {
    return (
      <div id="signup-form">

      {this.props.data ? <Redirect to= '/login' />:
        <form onSubmit={this.handleSubmit}>
      <h1 className='signUp'>Sign Up</h1>

      <label className="login-small-text" htmlFor="first_name">First Name</label>
      <input id="first_name" className="signup-input" ref = "first_name" name="first_name" type="first_name" required/>

      <label className="login-small-text" htmlFor="last_name">Last Name</label>
      <input id="last_name" className="signup-input" ref = "last_name" name="last_name" type="last_name" required/>

      <label className="login-small-text" htmlFor="email">Email</label>
      <input id="email" ref = "email" name="email" type="email" required/>

      <label className="login-small-text" htmlFor="username">Password</label>
      <input id="username" ref = "password" name="username" type="password" required/>



      <button id="signup-button" label="Submit">Submit</button>

    </form>}

      {this.props.toast ? <div>
        <Alert bsStyle="success">
          <strong>Invalid email or password.</strong>
        </Alert>
      </div>: null}

    </div>
  )
  }

}

export default SignUp
