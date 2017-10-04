import React, { Component } from 'react';
import './App.css';
import SchoolHead from './SIMSSchoolHead';
import UploadPhoto from './SIMSUploadPhoto';
import AddEvent from './SIMSAddEvent';
import {Switch,Route} from 'react-router-dom';
import Album from './SIMSAlbum';
import AlbumList from './SIMSAlbumList';
import EventList from './SIMSEventList';
class SCHOOL extends Component {
   
   
  render() {

    return (
   <div className="App">
        <div className="container">
             <div className="header_nav">
                <a href="/" title="Admin Home"><img  onClick={this.props._ChangeToMain} src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507117723/home_hzetcd.png"/></a>
               
                <a ><img  onClick={this.props._logout} title="Logout" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507117747/power_if9o0i.png"/></a>
           </div>
           <Switch>

              <Route exact path="/" component={SchoolHead}/>
              <Route exact path="/SIMSAddEvent" component={AddEvent}/>
              <Route exact path="/SIMSAllEvents" component={EventList}/>
              <Route exact path="/SIMSPhoto" component={UploadPhoto}/>
               <Route exact path="/SIMSAlbum" component={Album}/>
                 <Route exact path="/SIMSAlbums" component={AlbumList}/>
           </Switch>

        </div>
    </div>
    );
  }
}

export default SCHOOL;
