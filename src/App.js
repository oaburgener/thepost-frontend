import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Jumbotron from './components/jumbotron'
import Navbar from './components/Navbar'
import About from './components/About'
import {pinkA200} from 'material-ui/styles/colors';
import Footer from './components/Footer'
import BodyContainer from './containers/BodyContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from './actions/actions_index.js'
import JumbotronContainer from './containers/JumbotronContainer'
import FilterContainer from './containers/FilterContainer'
import Filters from './components/Filter'
import ArticleContainer from './containers/ArticleContainer'
import SmallCard from './components/SmallCard'
import Login from './components/Login'
import SubmitButton from './components/Login'
import AdminContainer from './containers/AdminContainer'
import SignUp from './containers/SignUpContainer'
import LoginContainer from './containers/LoginContainer'
import Form from './components/Form'
import FormContainer from './containers/FormContainer'
import NavContainer from './containers/NavContainer'
import DeleteArticle from './components/DeleteArticle.js'



class App extends Component {

  componentDidMount() {
    this.props.getArticles()
  }


  render() {
    return (
      <Router>
        <div className="App">

          <MuiThemeProvider>
            <NavContainer />
          </MuiThemeProvider>

          <Route exact path="/" render={() => (
            <div className='container-fluid'>
              <JumbotronContainer />
              <FilterContainer />
              <MuiThemeProvider>
                <BodyContainer />
              </MuiThemeProvider>
            </div>
          )}/>

          <Route exact path ='/admin' render={() =>(
            <div>
              <AdminContainer />
            </div>
          )}/>

          <Route exact path ="/article/:id" render={() => (
            <div>
              <ArticleContainer />
            </div>
          )}/>

          <Route exact path ="/article-submit" render={() => (
            <div>
              <FormContainer/>
            </div>
          )}/>

          <Route exact path ="/about" render={() => (
            <div>
              <About />
            </div>
          )}/>

          <Route exact path ="/login" render={() => (
            <div>
              <MuiThemeProvider>
                <LoginContainer />
              </MuiThemeProvider>
            </div>
          )}/>
          <Route exact path ="/SignUp" render={()=>(
            <div>
              <SignUp />
            </div>
          )}/>
          <MuiThemeProvider>
            <Footer />
          </MuiThemeProvider>
      </div>
    </Router>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App)
