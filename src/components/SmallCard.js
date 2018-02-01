import React from 'react'
import '../index.css'
import FlatButton from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import{Grid, Row, Col, Image} from 'react-bootstrap'


const SmallCard = ({article, getArticleId}) => {

  return (
      <Col xs={12} sm={6} md={6} lg={4}>
        <Card
          style=
          {{width:'auto',
          marginBottom: '28px'}}>
          <Link to={`/article/${article.id}`}>
            <CardMedia
              onClick={(event)=>{getArticleId(article.id)}}
              overlay={<CardTitle
                title={article.title}
                titleStyle={{fontWeight:'500', fontFamily:'Lato', fontFamily:'Helvetica Neue'}}
                subtitle={article.first_name + ' ' +article.last_name} />}>
              <Image className="smallPic" src={article.image_url} alt="" responsive/>
            </CardMedia>
          </Link>
        </Card>
      </Col>    )
      }







export default SmallCard;
