import React, { Component } from 'react';
import './App.css';
import SchoolHead from './SchoolHead';
import UploadPhoto from './UploadPhoto';
import AddEvent from './AddEvent';
import {Switch,Route} from 'react-router-dom';
import Album from './Album';
import AlbumList from './AlbumList';
import EventList from './EventList';
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
              <Route exact path="/AddEvent" component={AddEvent}/>
              <Route exact path="/AllEvents" component={EventList}/>
              <Route exact path="/Photo" component={UploadPhoto}/>
               <Route exact path="/Album" component={Album}/>
                 <Route exact path="/Albums" component={AlbumList}/>
           </Switch>

        </div>
    </div>
    );
  }
}

export default SCHOOL;

