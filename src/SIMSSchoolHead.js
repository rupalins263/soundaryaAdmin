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
                      <Link to="/SIMSAddEvent"> <button> ADD NEW EVENT </button></Link>
                       <Link to="/SIMSAllEvents"><button> VIEW ALL EVENT </button></Link>
                  </div>

            </div>
          <div className="block" style={{float:"right"}}>
               
                   
                      <div className="">

                            PHOTO & GALLERY
                          <Link to="/SIMSPhoto"> <button> ADD NEW PHOTO </button></Link>
                          <Link to="/SIMSAlbum"> <button> ADD NEW ALBUM </button></Link>
                          <Link to="/SIMSAlbums"> <button> EDIT ALBUM </button></Link>


                      </div>
                
              
          </div>
          

        </div>
    </div>
    );
  }
}

export default SchoolHead;
