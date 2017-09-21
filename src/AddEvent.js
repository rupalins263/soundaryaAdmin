import React, { Component } from 'react';
import {CloudinaryContext}from 'cloudinary-react';
import DEV from './APIutil';
import axios from 'axios';
 var  URL=DEV+"/School/Events";
 var CLOUDINARY_URL="https://api.cloudinary.com/v1_1/dvl9i5pry/upload";
 var  CLOUDINARY_UPLOAD_PRESET="i9afople";

class Album extends Component {
     
     constructor(){
       super();
       this.state={
         
         value:"Choose Album",
         imgUrl:""

          
       }

       this.handleChange = this.handleChange.bind(this);
     }
   
    handleChange(event) {

    this.setState({value: event.target.value});

    }

   componentDidMount(){
      
     var _this=this;
     var fileUpload=document.getElementById("fileUpload");
     var Imageupload=document.getElementById("Imageupload");
     fileUpload.addEventListener('change',function(event){
       var file=event.target.files[0];
       var formData=new FormData();
       formData.append('file',file);
       formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
       axios({
         url:CLOUDINARY_URL,
         method:'POST',
         headers:{
          'Content-Type':'application/x-www-form-urlencoded'
         },
         data:formData
       }).then((res)=>{
           _this.setState({
             imgUrl:res.data.url
           })
       })
       .catch((err)=>{
           
           console.log(err)
       })
     })
   }
   _submit(event){
     event.preventDefault();
     var title=document.getElementById("name").value;
     var date=document.getElementById("date").value;
     axios.post(URL,{
       
          "name":title,
          "date" :date,
          "eventUrl":this.state.imgUrl
         }).then((res)=>{
             alert("Uploaded")
             window.location("/")

         }).catch((err)=>{

            console.log(err)
         })

   }
  render() {
  

  return (
   <div style={{ margin:"80px"}}>
               <form  onSubmit={this._submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Add Event</label>
                    <input type="text" id="name" className="form-control" required/>
                     
                </div>
                 <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Choose Date</label>
                    <input type="date" id="date" className="form-control" required/>
                </div>
                <div className="form-group">

                    <label htmlFor="exampleInputPassword1">Description </label>
                   <input type="file" id="fileUpload" className="btn btn-success"/>
                </div>
                
                 <img src={this.state.imgUrl} width="300px" height="300px" id="Imageupload"/><br/><br/>
                   <button type="submit" className="btn btn-success" >Submit</button>
                   <button type="reset"  className="btn btn-danger" style={{marginLeft:"30px"}} value="Reset">Reset</button>
                </form>
      </div>
    );
  }
}

export default Album;
