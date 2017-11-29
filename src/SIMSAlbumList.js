import React, { Component } from 'react';
import AlbumCompo from './AlbumCompo';
import axios from 'axios';
import DEV from './APIutil';
var URL=DEV+"/SIMS/Albums";
var ImageURL=DEV+"/SIMS/Image/";
class AlbumList extends Component {
     constructor(){
       super();
       this.state={
         albums:[],
         images:[],
         showImage:false
       }
       this._deleteEvent=this._deleteEvent.bind(this);

       this.deleteImage=this.deleteImage.bind(this);
       
     }


   componentDidMount(){

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
   deleteImage(ids){
      axios.delete(`http://198.12.154.44:3333/SIMS/Image/${ids}`)
          .then((res)=>{
               this.setState({
                      showImage:false
                    })

          })
          .catch((err)=>{
      
               this.setState({
                            showImage:false
                          })
               })
   }
   
    _deleteEvent(ids)
   {
     
       axios.delete(URL+"/"+ids)
       .then((res)=>{
           
           this.setState({
             albums:res.data.response
           })
       })
       .catch((err)=>{
           console.log(err)
       }) 
   }

    _watch( id)
  {
     axios.get(ImageURL+id)
       .then((res)=>{
           console.log(res)
           this.setState({
             images:res.data.response,
             showImage:true
           })
       })
       .catch((err)=>{
           console.log(err)
       }) 

  }

  changetoUsual(event){
    this.setState({
      showImage:false
    })
  }

  render() { 
  
     let compo=<div> Loading ....</div>
     if(this.state.albums.length>0)
     {
     compo=this.state.albums.map((item,index)=>{
   
         return <AlbumCompo key={index} name={item.albumname} id={item.albumid} desc={item.album_description} watch={this._watch.bind(this)} del={this._deleteEvent}/>
     })
     }
     let imCompo="";
     if(this.state.images.length>0)
     {
     imCompo=this.state.images.map((item,index)=>{
         return ( <div style={{border:"3px solid white","border-radius":"8px","margin":"10px"}} className="col-md-3 col-sm-3 col-xs-12 col-lg-3">
                     <img src={item.image_url} style={{position:"relative"}} width="100%" height="200px"/>
                     <button className="btn btn-danger"style={{position:"absolute",top:"200px","left":"0",width:"100%"}} onClick={()=>{this.deleteImage(item.imageid)}}> DELETE </button>
                  </div> )
     }).reverse();
    }
     
     let backbtn=""
     if(this.state.showImage)
     {
         backbtn=<button onClick={this.changetoUsual.bind(this)} style={{float:"left"}} className="btn btn-danger">Go Back</button>
     }

    return (
   <div style={{ margin:"80px"}}>
    
          <div className="container" style={{display:(this.state.showImage)?"none":"block"}}>
            <table className="table table-striped">
            <thead>
              <tr>
                <th>Album Id</th>
                <th>Album Name</th>
                <th>Album Description</th>
                <th>Watch</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {compo}
        
            </tbody>
          </table>
           <div>
           </div>
              </div>
          <div className="container" style={{display:(this.state.showImage)?"block":"none"}}>
            <div style={{marginBottom:"50px"}}>
            {backbtn}
           </div>
            <div style={{marginTop:"30px"}} className="row">
              {imCompo}
            </div>
          </div>
          
      </div>
    );
  }
}

export default AlbumList;
