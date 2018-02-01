import store from '../store'

export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_SPORT = 'GET_SPORT'
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE'
export const DELETE_USER = 'DELETE_USER'
export const GET_USERS = 'GET_USERS'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const CREATE_ARTICLE='CREATE_ARTICLE'
export const LOGIN = 'LOGIN'
export const UNAUTHORIZED = 'UNAUTHORIZED'
export const SIGNUP = 'SIGNUP'
export const GET_COOKIE = 'GET_COOKIE'


export const getArticles = () => {

  return async (dispatch) => {
    const response = await fetch('https://postbackend.herokuapp.com/articles/')
    const json = await response.json()
    const trending =  json.data.sort(function(a,b){
      return (b.likes + b.views) - (a.likes + a.views)
    }).slice(0,2)

    dispatch({
      type: GET_ARTICLES,
      data:json.data,
      trending: trending
    })
 }
}


export const getBySport = (sport)=> {
  return async (dispatch) => {
    const response = await fetch(`https://postbackend.herokuapp.com/articles/filter/${sport}`)
    const json = await response.json()
    let filtered = store.getState().splash.all_articles.filter(e => e.sport === sport)

    dispatch({
      type: GET_SPORT,
      data: json.data,
      filtered: filtered
    })
  }
}

export const getArticleId = (id) => {

  return async (dispatch) => {
    const response = await fetch(`https://postbackend.herokuapp.com/articles/${id}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
        credentails : 'include'
    })
    const json = await response.json()
    const body = json.data.body.split('\n')
    dispatch({
      type: GET_ONE_ARTICLE,
      data: json.data,
      body: body
    })
  }
}

export const delArticle = (id) => {

  return async (dispatch) => {
    let cookie = document.cookie
    const response = await fetch(`https://postbackend.herokuapp.com/articles/${id}`,{
      method: 'DELETE',
      body: {},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'cooker': cookie
      },
      credentails : 'include'
    })
    if(response.status==403){
      dispatch({
        type: 'jwtsaysno',
      })
    }else{
      let remaining = store.getState().admin.all_articles.filter(e => e.id !== id)
      dispatch({
        type: DELETE_ARTICLE,
        data: remaining
      })
    }
  }
}

export const getUsers = () => {
  return async (dispatch) => {
    let cookie = document.cookie
    const response = await fetch ('https://postbackend.herokuapp.com/users/',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'cooker' : cookie,
      },
      credentails : 'include'
    })
    const json = await response.json()
    if(response.status===403){
      dispatch({
        type: 'jwtsaysno',
      })
    }else{
      dispatch({
        type: GET_USERS,
        data: json.data,
      })
    }
  }
}

export const delUser = (id) => {
  return async (dispatch) => {
    let cookie = document.cookie
    const response = await fetch(`https://postbackend.herokuapp.com/users/${id}`,{
      method: 'DELETE',
      body: {},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'cooker' : cookie,
      },
      credentails : 'include'
    })
    if(response.status===403){
      dispatch({
        type: 'jwtsaysno',
      })
    }else{
      let remaining = store.getState().admin.all_users.filter(e => e.id !== id)
      dispatch({
        type: DELETE_USER,
        data: remaining
      })
    }
  }
}

export const createArticle = (id) => {

  let title = document.getElementById('title').value
  let summary = document.getElementById('summary').value
  let articleBody = document.getElementById('article-body').value
  let sport = document.getElementById('dropdown').value
  let image = document.getElementById('image').value

  let body = {user_id: id ,title:title, summary:summary, body:articleBody, sport:sport, image_url:image}
  let bitchinbod = JSON.stringify(body)
  let cookie = document.cookie
  return async (dispatch) => {
    const response = await fetch('https://postbackend.herokuapp.com/articles/', {
      method: 'POST',
      body: bitchinbod,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'cooker' : cookie,
      },
        credentails : 'include'
    })
    if(response.status===403){
      dispatch({
        type: 'jwtsaysno',
      })
    }else{
      dispatch({
        type: CREATE_ARTICLE,
        data: [...store.getState().splash.all_articles]
      })
    }
  }
}

export const logInVerify = (user) =>{
  let body = JSON.stringify(user)
  return async (dispatch) =>{
      const response = await fetch('https://postbackend.herokuapp.com/users/',{
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body:body
      })

      if(response.status===403){
        dispatch({
          type: UNAUTHORIZED,
          data: true
        })
      }else{
        const json = await response.json()
        let sign = `jwt=${json.token}`
        document.cookie=sign
        let cookie = {jwt:json.token,admin:json.admin,id:json.id}
        dispatch({
         type: LOGIN,
         data: true,
         cookie: cookie,
      })
    }
  }
}

export const SignUpVerify = (user) =>{
let body = JSON.stringify(user)
return async (dispatch) =>{
    const response = await fetch('https://postbackend.herokuapp.com/users/',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body:body
    })

      dispatch({
       type: SIGNUP,
       data: true
    })
  }
  }
