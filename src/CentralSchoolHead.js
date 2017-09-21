import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
class SchoolHead extends Component {
   
   
  render() {

    return (
   <div className="App">
        <div className="container">
         
           
            <div className="block">
                
                  <div className="">
                      NEWS & EVENTS
                      <Link to="/CentralAddEvent"> <button> ADD NEW EVENT </button></Link>
                       <Link to="/CentralAllEvents"><button> VIEW ALL EVENT </button></Link>
                  </div>

            </div>
          <div className="block" style={{float:"right"}}>
               
                   
                      <div className="">

                            PHOTO & GALLERY
                          <Link to="/CentralPhoto"> <button> ADD NEW PHOTO </button></Link>
                          <Link to="/CentralAlbum"> <button> ADD NEW ALBUM </button></Link>
                          <Link to="/CentralAlbums"> <button> EDIT ALBUM </button></Link>


                      </div>
                
              
          </div>
          

        </div>
    </div>
    );
  }
}

export default SchoolHead;
