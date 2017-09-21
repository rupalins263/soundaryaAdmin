import React, { Component } from 'react';
import './App.css';
import DEV from './APIutil';
import {Link} from 'react-router-dom';
class SchoolHead extends Component {
   
   
  render() {

    return (
   <div className="App">
        <div className="container">
         
           
            <div className="block">
                
                  <div className="">
                      NEWS & EVENTS
                      <Link to="/PucAddEvent"> <button> ADD NEW EVENT </button></Link>
                       <Link to="/PucAllEvents"><button> VIEW ALL EVENT </button></Link>
                  </div>

            </div>
          <div className="block" style={{float:"right"}}>
               
                   
                      <div className="">

                            PHOTO & GALLERY
                          <Link to="/PucPhoto"> <button> ADD NEW PHOTO </button></Link>
                          <Link to="/PucAlbum"> <button> ADD NEW ALBUM </button></Link>
                          <Link to="/PucAlbums"> <button> EDIT ALBUM </button></Link>


                      </div>
                
              
          </div>
          

        </div>
    </div>
    );
  }
}

export default SchoolHead;
