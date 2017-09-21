import React, { Component } from 'react';
import EventCompo from './PucEventCompo';
import axios from 'axios';
import DEV from './APIutil';
var URL=DEV+"/Puc/Events";

class EventList extends Component {
     constructor(){
       super();
       this.state={
         albums:[ 
      ]
       }
       this._deleteEvent=this._deleteEvent.bind(this);
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
  render() { 

     let compo=""
     compo=this.state.albums.map((item,index)=>{
         return <EventCompo key={index} name={item.eventname} date={item.eventdate} id={item.eventid} del={this._deleteEvent}/>
     })

    return (
   <div style={{ margin:"80px"}}>
          <div className="container">
            <table className="table table-striped">
            <thead>
              <tr>
                <th>Event Id</th>
                <th>EventList Name</th>
                <th>Event Date</th>
                <th>Delete</th>
                
              </tr>
            </thead>
            <tbody>
            {compo}
        
            </tbody>
          </table>
              </div>
      </div>
    );
  }
}

export default EventList;
