import {
  GET_ARTICLES,
  GET_SPORT,
  CREATE_ARTICLE,
} from '../actions/actions_index'

const initialState = {
  user_id: 0,
  all_articles: [],
  trending_articles: [],
  filtered_articles: [],
  is_admin: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
    return {
      ...state,
      all_articles: action.data,
      trending_articles: action.trending
    }
    case GET_SPORT:
    return {
      ...state,
      all_articles: action.data,
      filtered_articles: action.filtered
    }
    case CREATE_ARTICLE:
    return {
      ...state,
      all_articles: action.data,
    }

    default: return state
  }
}
