import React, { Component } from 'react';
import {CloudinaryContext}from 'cloudinary-react';
import axios from 'axios';
import DEV from './APIutil';
 var URL=DEV+"/SIMS/Albums";
  var PhotoURL=DEV+"/SIMS/Photo";
 var CLOUDINARY_URL="https://api.cloudinary.com/v1_1/dvl9i5pry/upload";
 var  CLOUDINARY_UPLOAD_PRESET="i9afople";

class Album extends Component {
     
     constructor(){
       super();
       this.state={
         albums:[],
         value:"Choose Album",
         imgUrl:""

          
       }

       this.handleChange = this.handleChange.bind(this);
     }
   
    handleChange(event) {

    this.setState({value: event.target.value});

    }
   componentWillMount(){

      axios.get(URL)
       .then((res)=>{
            console.log(res.data)
           this.setState({
             albums:res.data.response
           })
       })
       .catch((err)=>{
           console.log(err)
       })
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
            console.log(res.data)
           _this.setState({
             imgUrl:res.data.url
           })
       })
       .catch((err)=>{
           alert("Image Upload Failed");
           console.log(err)
       })
     })
   }

    _submit(event){
      document.getElementById("sub").disabled=true;
     event.preventDefault();
     var id=parseInt(document.getElementById("slct").value);
     var url=this.state.imgUrl;
     console.log(id,url)
     axios.post(PhotoURL,{
       
          "url":this.state.imgUrl,
          "id" :id
   
         }).then((res)=>{

            alert("Image Uploaded Successfully")
          document.getElementById("sub").disabled=false;

         }).catch((err)=>{
            
            alert("Failed to Upload")
            document.getElementById("sub").disabled=false;
         })

   }

  render() {
    let val="";
    if(this.state.albums.length)
    {
      val=this.state.albums.map((item,index)=>{
         return  <option key={index} value={item.albumid}>{item.albumname}</option>
      })
    }
    
    return (
   <div style={{ margin:"80px"}}>
                <form onSubmit={this._submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Choose Album</label>
                    <select className="form-control" id="slct" value={this.state.value} onChange={this.handleChange} required>
                             {val}
                      </select>
                 
                </div>
                <div className="form-group">

                    <label htmlFor="exampleInputPassword1">Description </label>
                   <input type="file" id="fileUpload" className="btn btn-success" required/>
                </div>
                
                 <img src={this.state.imgUrl} width="300px" height="300px" id="Imageupload"/><br/><br/>
                   <button type="submit"  id="sub" className="btn btn-primary">Submit</button>
                   <button type="reset" style={{marginLeft:"30px"}} className="btn btn-danger">Reset</button>
                </form>
      </div>
    );
  
 }
}

export default Album;
