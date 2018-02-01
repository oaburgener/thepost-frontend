import {
  UNAUTHORIZED,
  SIGNUP,
} from '../actions/actions_index'

var initialState = {
  toast:false,
  token: false,
  data:false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    return {
      ...state,
      data: action.data
    }

    case UNAUTHORIZED:
    return{
      ...state,
      toast: action.data
    }
    default: return state
  }
}
