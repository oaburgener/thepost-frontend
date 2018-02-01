import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'



class Article extends Component {
  constructor(props){
    super(props)
     this.shareLink = window.location.href
  }
  getLikes() {
    this.props.article.likes += 1
    return this.props.article.likes
  }

  componentDidMount() {
    this.props.getArticleId( window.location.href.split('/')[window.location.href.split('/').length-1])
  }


  render(){
    return (
    <div className= 'article-container' style={{marginTop:'38px'}}>
      <div >
        <Image className='header_image' src={this.props.article.image_url}/>
      </div>
      <h1 className='article_title'>{this.props.article.title}</h1>
      <h3 className='author_name'>{this.props.article.first_name} {this.props.article.last_name}</h3>
      {this.props.body.map(paragraph=>(<p className='article_body'>{paragraph}</p>))}
      <div className= "share-buttons">
        <i onClick= {() => this.getLikes()} className="material-icons">thumb_up</i>
        <div>Likes: {this.props.article.likes}</div>
        <div className="fb-share-button" data-href={`${this.shareLink}`} data-layout="button" data-size="small" data-mobile-iframe="false"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2Fshare-button%23configurator&amp;src=sdkpreparse">Share</a></div>
        <a target= "_blank" href={`https://twitter.com/intent/tweet?text=${this.shareLink}`} data-size="large"><img className="twitter-share-button" src={require('../logos/tweetLogo.png')} /></a>
        <i class="material-icons">visibility</i>
        <div>Views:{this.props.article.views}</div>
      </div>
    </div>
    )
  }
}

export default Article
