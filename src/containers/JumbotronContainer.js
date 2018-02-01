import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from '../actions/actions_index.js'
import { getArticleId } from '../actions/actions_index.js'
import Jumbotron from '../components/jumbotron.js'

const mapStateToProps = state => ({
  trending_articles:state.splash.trending_articles,
})

const mapDispatchToProps = dispatch => bindActionCreators({
getArticleId
}, dispatch)

const JumbotronContainer = connect (
  mapStateToProps,mapDispatchToProps
)(Jumbotron)

export default JumbotronContainer
