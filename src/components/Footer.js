import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


class BottomNavigationExampleSimple extends Component {

  render() {
    return (
      <footer className='footer'>
        <Paper zDepth={1} style={{height: '44px'}}>
          <BottomNavigation style={{
            height:'29px'
          }}>
            <h6 style={{
              marginTop:'15px',
              fontFamily:'Helvetica',
              fontWeight:'semibold',
              color:'darkgray',
              fontSize:'18px'
            }}>Copyright 2018 PRO-Post Media</h6>
          </BottomNavigation>
        </Paper>
      </footer>
    );
  }
}

export default BottomNavigationExampleSimple;
