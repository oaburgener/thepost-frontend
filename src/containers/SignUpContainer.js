import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignUp from '../components/SignUp.js'
import {SignUpVerify} from '../actions/actions_index.js'

const mapStateToProps = state => ({
  data: state.SignUp.data,
  toast: state.SignUp.toast
})

const mapDispatchToProps = dispatch => bindActionCreators({
SignUpVerify
}, dispatch)

const SignUpContainer = connect (
  mapStateToProps,mapDispatchToProps
)(SignUp)

export default SignUpContainer
