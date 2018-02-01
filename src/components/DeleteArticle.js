import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col, Button, ListGroupItem } from 'react-bootstrap'
import UserCard from './UserCard'
import { getUsers } from '../actions/actions_index.js'
import { delArticle } from '../actions/actions_index.js'
import {getArticles} from '../actions/actions_index.js'

const DeleteArticle = ({article, delArticle, getArticles}) => {

  return (
    <div>
      <p className="articleDelete"><Button style={{marginLeft:'0', marginRight:'6px'}} type='button' bsSize="small"  className='admin-button' onClick={
        async ()=> { await delArticle(article.id)
          await getArticles()}}>Delete Article</Button><span style={{fontWeight: '500'}}> Article Title:</span> {article.title} <br />
        <span style={{fontWeight: '500'}}> Summary:</span> {article.summary}
      </p>

        </div>
    )
}



export default DeleteArticle
