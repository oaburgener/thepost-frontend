import '../App.css';
import '../index.css';
import React, { Component } from 'react';
import { getBySport } from '../actions/actions_index.js'
import { getArticles } from '../actions/actions_index.js'
class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: 0
    }
  }

  render () {
    return (
      <div className="row filterbar">
        <span className= "filter-by">
          FILTER BY
        </span>
        <div className= "all-icons">
          <img onClick= {() => this.props.getBySport('basketball')}
            onMouseEnter= {() => this.setState({ hover: 1 }) }
            onMouseLeave= {() => this.setState({ hover: 0 }) }
            className= {this.state.hover === 1 ? "hover-icon" : "filter-icons"}
            src={ require("../logos/bwBBall.png") }/>
          <img onClick={()=> this.props.getBySport('baseball')}
            onMouseEnter= {() => this.setState({ hover: 2 }) }
            onMouseLeave= {() => this.setState({ hover: 0 }) }
            className= {this.state.hover === 2 ? "hover-icon" : "filter-icons"}
            src={ require("../logos/baseball.png") }/>
          <img onClick={()=> this.props.getBySport('football')}
            onMouseEnter= {() => this.setState({ hover: 3 }) }
            onMouseLeave= {() => this.setState({ hover: 0 }) }
            className= {this.state.hover === 3 ? "hover-icon" : "filter-icons"}
            src={ require("../logos/goodFootball.png") }/>
          <img onClick={()=> this.props.getBySport('hockey')}
            onMouseEnter= {() => this.setState({ hover: 4 }) }
            onMouseLeave= {() => this.setState({ hover: 0 }) }
            className= {this.state.hover === 4 ? "hover-icon" : "filter-icons"}
            src={ require("../logos/hockeyLogo.png") }/>
          <img onClick={()=> this.props.getBySport('soccer')}
            onMouseEnter= {() => this.setState({ hover: 5 }) }
            onMouseLeave= {() => this.setState({ hover: 0 }) }
            className= {this.state.hover === 5 ? "hover-icon" : "filter-icons"}
            src={ require("../logos/Soccerball_mark.svg.png") }/>
          <img onClick={()=> this.props.getArticles('All')}
            onMouseEnter= {() => this.setState({ hover: 6 }) }
            onMouseLeave= {() => this.setState({ hover: 0 }) }
            className= {this.state.hover === 6 ? "hover-icon" : "filter-icons"}
            src={ require("../logos/all.png") }/>
        </div>
      </div>
    )
  }
}


export default Filters
