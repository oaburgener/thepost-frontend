import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticleId } from '../actions/actions_index.js'
import Body from '../components/Body.js'

const mapStateToProps = state => ({
  all_articles:state.splash.all_articles,
})

const mapDispatchToProps = dispatch => bindActionCreators({
getArticleId
}, dispatch)

const BodyContainer = connect (
  mapStateToProps, mapDispatchToProps
)(Body)

export default BodyContainer
