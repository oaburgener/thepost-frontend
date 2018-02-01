import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col, Button, ListGroupItem } from 'react-bootstrap'
import { delUser } from '../App.js'
import DeleteArticle from './DeleteArticle'
import {getArticles} from '../actions/actions_index.js'
import {delArticle} from  '../actions/actions_index.js'



const UserCard = ({ user, getUsers, article, delUser, all_articles, delArticle}) => {

  return (
    <Grid>
      <Row className="user_info">
        <Col lg={12}>
          <ListGroupItem>NAME: {user.first_name} {user.last_name}</ListGroupItem>
          <ListGroupItem>EMAIL: {user.email}</ListGroupItem>
          <ListGroupItem>USER RATING: {user.rating}<Button bsSize="small" className='admin-button'
            onClick={async ()=> {await delUser(user.id)
              await getUsers()}}>Delete</Button>
          </ListGroupItem>
          <ListGroupItem>{
            all_articles.map(article =>  {
              if (article.user_id == user.id) {
                return (<DeleteArticle key={article.id} article={article} title={article.title} summary={article.summary} delArticle={delArticle} getArticles={getArticles}/>)
              }
            })}</ListGroupItem>
        </Col>
      </Row>
    </Grid>
    )
}



export default UserCard;
