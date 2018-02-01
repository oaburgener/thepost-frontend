import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from '../components/Navbar.js'
import { logInVerify, createArticle } from '../actions/actions_index.js'

const mapStateToProps = state => ({
  cookie: state.login.cookie,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  logInVerify
}, dispatch)

const NavContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(Navbar)

export default NavContainer
