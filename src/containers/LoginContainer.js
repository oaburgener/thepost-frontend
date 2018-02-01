import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/Login.js'
import {logInVerify} from '../actions/actions_index.js'

const mapStateToProps = state => ({
  token: state.login.token,
  toast: state.login.toast
})

const mapDispatchToProps = dispatch => bindActionCreators({
logInVerify
}, dispatch)

const LoginContainer = connect (
  mapStateToProps,mapDispatchToProps
)(Login)

export default LoginContainer
