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
                <a href="/" title="Admin Home"><img  onClick={this.props._ChangeToMain} src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507117723/home_hzetcd.png"/></a>
               
                <a ><img  onClick={this.props._logout} title="Logout" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507117747/power_if9o0i.png"/></a>
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
//http://res.cloudinary.com/dvl9i5pry/image/upload/v1507117723/home_hzetcd.png
//http://res.cloudinary.com/dvl9i5pry/image/upload/v1507117747/power_if9o0i.png