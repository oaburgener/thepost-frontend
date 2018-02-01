import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const LargePics = ({article, getArticleId}) => {
  return (
    <Col sm={12} md={6} lg={6} style={{paddingLeft: "4px", paddingRight: "4px", marginBottom:'25px'}}>
      <Link to={`/article/${article.id}`}>
        <div
          onClick={(event)=>{getArticleId(article.id)}}
          className='imageBig'
          style={{backgroundImage: `url(${article.image_url})` }}>
          <div className="box">
            <h2 className='largeTitle'>{article.title}</h2>
            <h4 className="largeSub">{article.first_name} {article.last_name}</h4>
          </div>
        </div>
      </Link>
    </Col>
  )
}
export default LargePics
