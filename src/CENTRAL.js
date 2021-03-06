import React, { Component } from 'react';
import './App.css';
import SchoolHead from './CentralSchoolHead';
import UploadPhoto from './CentralUploadPhoto';
import AddEvent from './CentralAddEvent';
import {Switch,Route} from 'react-router-dom';
import Album from './CentralAlbum';
import AlbumList from './CentralAlbumList';
import EventList from './CentralEventList';
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
              <Route exact path="/CentralAddEvent" component={AddEvent}/>
              <Route exact path="/CentralAllEvents" component={EventList}/>
              <Route exact path="/CentralPhoto" component={UploadPhoto}/>
               <Route exact path="/CentralAlbum" component={Album}/>
                 <Route exact path="/CentralAlbums" component={AlbumList}/>
           </Switch>

        </div>
    </div>
    );
  }
}

export default SCHOOL;
