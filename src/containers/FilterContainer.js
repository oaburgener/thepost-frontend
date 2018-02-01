import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBySport } from '../actions/actions_index.js'
import { getArticles } from '../actions/actions_index.js'

import Filters from '../components/Filter.js'

const mapStateToProps = state => ({
  all_articles:state.splash.all_articles,
  filtered_articles: state.splash.filtered_articles
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getBySport: getBySport,
  getArticles: getArticles
}, dispatch)

const FilterContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(Filters)

export default FilterContainer
