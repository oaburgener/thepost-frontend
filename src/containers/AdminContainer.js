import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions/actions_index.js'
import { delUser } from '../actions/actions_index.js'
import { delArticle } from '../actions/actions_index.js'
import Admin from '../components/Admin.js'
import { getArticles } from '../actions/actions_index.js'

const mapStateToProps = state => ({
  all_users:state.admin.all_users,
  user: state.admin.user,
  all_articles: state.admin.all_articles,
  all_articles: state.splash.all_articles,
  article: state.admin.article
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers: getUsers,
  delUser: delUser,
  getArticles: getArticles,
  delArticle: delArticle,
}, dispatch)

const AdminContainer = connect (
  mapStateToProps,mapDispatchToProps
)(Admin)

export default AdminContainer
