import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import UserCard from './UserCard'
import { getUsers } from '../actions/actions_index.js'
import { delUser } from '../actions/actions_index.js'
import DeleteArticle from './DeleteArticle'
import {getArticles} from '../actions/actions_index.js'
import{delArticle} from '../actions/actions_index.js'



class Admin extends Component {
  constructor(props){
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.props.getUsers()
    this.props.getArticles()
  }


  render(){
    return (
    <div className='admin_container'>
      <h2>Admin Dashboard</h2>
      <div className="usersAdmin" style={{marginTop:'45px'}}>
        {this.props.all_users.map(user => (<UserCard key={user.id} user={user} getUsers={getUsers} delUser= {this.props.delUser} all_articles={this.props.all_articles} delArticle= {this.props.delArticle}/>))}
      </div>
    </div>
    )
  }
}


export default Admin
