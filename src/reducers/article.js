import {
  GET_ONE_ARTICLE,
} from '../actions/actions_index'


const initialState = {
  user_id: 0,
  article: {},
  body: [],
  is_admin: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_ARTICLE:
    return {
      ...state,
      article: action.data,
      body: action.body
    }
      break;
    default: return state
  }
}
