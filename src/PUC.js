import React, { Component } from 'react';
import './App.css';
import SchoolHead from './PucSchoolHead';
import UploadPhoto from './PucUploadPhoto';
import AddEvent from './PucAddEvent';
import {Switch,Route} from 'react-router-dom';
import Album from './PucAlbum';
import AlbumList from './PucAlbumList';
import EventList from './PucEventList';
class PUC extends Component {
   
   
  render() {

    return (
   <div className="App">
        <div className="container">
             <div className="header_nav">
                <a href="/" title="Admin Home"><img  onClick={this.props._ChangeToMain} src="http://central.soundaryainstitutions.in/img/icons/home.png"/></a>
               
                <a ><img  onClick={this.props._logout} title="Logout" src="http://central.soundaryainstitutions.in/img/icons/power.png"/></a>
           </div>
           <Switch>

              <Route exact path="/" component={SchoolHead}/>
              <Route exact path="/PucAddEvent" component={AddEvent}/>
              <Route exact path="/PucAllEvents" component={EventList}/>
              <Route exact path="/PucPhoto" component={UploadPhoto}/>
               <Route exact path="/PucAlbum" component={Album}/>
                 <Route exact path="/PucAlbums" component={AlbumList}/>
           </Switch>

        </div>
    </div>
    );
  }
}

export default PUC;
