import React from 'react'
import { MenuItem, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Form = ({createArticle, getArticles, cookie})=> {
  return (
    <div>
      <div className='guidelines-container'>
        <h1 id="form-title">Curious about submitting an article?</h1>
        <p className="form-text">Welcome to The Post! We welcome all submissions from experienced athletes. Please read the submission guidelines below. </p>
        <p className="form-headers">Guidelines</p>
        <p className="form-text">We strive to produce the best content possible for our readers. Therefore, we would like each article to align with a major sport and to be about 800 - 1,000 words. Posting an article is free! We love to hear your voice and welcome multiple submissions, including op-ed's, interviews, and narrative nonfiction.</p>
        <p className="form-text">Send us your work by using the submission form below. If including an image URL, please be sure it is high resolution! Email us at propost@propostmedia.com with any questions.</p>
      </div>
      <div class="submission-form">
        <form>
          <p id="legend" className="form-headers">Submissions</p>
          <legend className="form-field-submission">Name <span className="orange">*</span></legend>
            <input id="name" className="form-small-input" type="text" name="text" required/>
          <legend className="form-field-submission">Title <span className="orange">*</span></legend>
            <textarea id="title" className="form-large-input" name="title" required></textarea>
          <legend className="form-field-submission">Summary <span className="orange">*</span></legend>
          <legend id="summary-instruction" className="form-field-submission">Please summarize your article in 1-2 sentences.</legend>
            <textarea id="summary" className="form-large-input" name="summary" required></textarea>
          <legend className="form-field-submission">Text <span className="orange">*</span></legend>
            <textarea id="article-body" className="form-large-input" name="text" required></textarea>
          <legend className="form-field-submission">Sport <span className="orange">*</span></legend>
            <select id="dropdown">
              <option value="baseball">baseball</option>
              <option value="basketball">basketball</option>
              <option value="soccer">soccer</option>
              <option value="hockey">hockey</option>
              <option value="football">football</option>
            </select>
          <legend className="form-field-submission">Image URL</legend>
            <input id="image" className="form-small-input" type="text" name="image" />

          <Link to="/" onClick={async(e)=>{
            e.stopPropagation()
            await createArticle(cookie.id)
            getArticles()
          }}>
            <input className="form-button" type="submit" value="Submit"/>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Form
