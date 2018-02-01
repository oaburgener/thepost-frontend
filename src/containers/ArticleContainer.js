import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticleId } from '../actions/actions_index.js'
import Article from '../components/Article.js'

const mapStateToProps = state => ({
  article:state.article.article,
  body: state.article.body,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticleId,
}, dispatch)

const ArticleContainer = connect (
  mapStateToProps,mapDispatchToProps
)(Article)

export default ArticleContainer
