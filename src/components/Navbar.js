import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom'

const titleStyle={
  color: 'firebrick',
  fontFamily:"Helvetica Neue",
  fontWeight: 'bold',
  marginLeft: '3px',
  marginTop:'3px',
  fontSize:'30px'
}

const toolbar={
  zIndex: '9',
  position:'fixed',
  top:'0',
  backgroundColor:'white',
  marginBottom:'18px',
  width:'100%',
  paddingTop: '5px',
  height: '69px'
}

const toolImage={
  maxHeight: '45px',
  maxWidth: 'auto',
  paddingLeft: '24px',
  marginTop:'-23px',
}

const logo={
  display: 'inline-block',
  fontFamily:"Lato Regular",
  fontFamily:"Helvetica Neue",
  fontSize:'35px',
  fontWeight:'bold',
  color: 'black',
  marginTop:'3px',
  marginLeft: '2px'
}

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };

  }

  handleChange = (event, index, value) => this.setState({value});



  render() {
    return (

        <Toolbar style={toolbar}>
          <ToolbarGroup firstChild={true}>

            <Link to='/' style={{ textDecoration: 'none' }}>
              <img src={require("../logos/greenpostlogo.png")}  alt="Logo" style={toolImage} /><span style={logo}>OST</span>

            </Link>

            <FontIcon className="muidocs-icon-custom-sort" />
          </ToolbarGroup>
          <ToolbarGroup>
            <a href="https://twitter.com/PRO__file" target= "blank" style={{marginLeft:'3px', marginRight:'2px'}}>
              <img src={require('../logos/black twitter.png')} className="icons"/>
            </a>
            <a href="https://www.instagram.com/pro.file.sports/?hl=en" target= "blank">
              <img src={require('../logos/blackGramLogo.png')} className="icons"/>
            </a>
            <a href="https://www.facebook.com/profilesportsinc/" target= "blank">
              <img src={require('../logos/blackFbLogo.jpg')} className="icons"/>
            </a>
            <a href="http://pro-file.us/#/" target= "blank">
              <img src={require('../logos/round-logo.png')} className="icons" style={{height:'26px'}}/>
            </a>

            <IconMenu
              className= "login-menu"

              iconButtonElement={
                <IconButton style={{marginLeft:'10px'}} touch={true}> <svg fill="#000000" height="34" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                </IconButton> }

                  style={{
                    marginBottom:'6px',
                    marginLeft:'3px',
                  }}>
                {!this.props.cookie.id ? <Link to='/login' style={{ textDecoration: 'none' }}>
                  <MenuItem primaryText="Log in" />
                </Link> : null }

                {!this.props.cookie.id ? <Link to='/SignUp' style={{textDecoration: 'none'}}>
                  <MenuItem primaryText="Sign up" />
                </Link> : null }

                {this.props.cookie.id ? <Link to='/' style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={()=> {window.location.reload()}} primaryText="Sign out" />
                </Link> : null }
            </IconMenu>

            <IconMenu

              className='hamburger'
              iconButtonElement=
              {<IconButton style={{marginLeft:'10px'}}>  <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg></IconButton>}

              onChange={this.handleChangeSingle}
              value={this.state.valueSingle}
              style={{marginBottom:'4px', marginLeft: '-3px' }}>

              <Link to='/about' style={{ textDecoration: 'none' }}>
                <MenuItem  value={1} href="#" primaryText="About" className="menu"/>
              </Link>

              {this.props.cookie.id ? <Link to="/article-submit" style={{ textDecoration: 'none' }}>
                <MenuItem value={2} href="#" primaryText="Submit article" className="menu"/>
              </Link> : null }

              {this.props.cookie.admin ? <Link to='/admin' style={{ textDecoration: 'none' }}>
                <MenuItem primaryText="Admin View" />
              </Link> : null}
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
    );
  }
}
