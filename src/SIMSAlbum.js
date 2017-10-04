import React, { Component } from 'react';
import axios from 'axios';
import DEV from './APIutil';
var URL=DEV+"/SIMS/Albums";

class Album extends Component {
   

     _submit(event){
     event.preventDefault();
     var title=document.getElementById("AlbumANme").value;
     var desc=document.getElementById("exampleInputPassword1").value;
     axios.post(URL,{
       
          "name":title,
          "desc" :desc,
          
         }).then((res)=>{

            alert("Album Added Successfully");

         }).catch((err)=>{

             alert("Failed to add Album");
         })

   }
   
  render() {

    return (
   <div style={{ margin:"80px"}}>
                    <form onSubmit={this._submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Album Name</label>
                    <input type="text" className="form-control" id="AlbumANme" aria-describedby="emailHelp" placeholder="Enter Alnum Name" required />
      
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description </label>
                    <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Description"/>
                </div>
                
                  <button type="submit" className="btn btn-primary">Submit</button> 
                  <button type="reset" style={{marginLeft:"40px"}} className="btn btn-danger">Reset</button>
                </form>
      </div>
    );
  }
}

export default Album;
