import {
  UNAUTHORIZED,
  LOGIN,
} from '../actions/actions_index'

// const getInitialState = {
//   let cookie = document.cookie
//   if(cookie){
//   }
// }

var initialState = {
  toast:false,
  token: false,
  cookie: {},
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    return {
      ...state,
      token: action.data,
      cookie: action.cookie
    }
    case UNAUTHORIZED:
    return{
      ...state,
      toast: action.data
    }
    default: return state
  }
}
