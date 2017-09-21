import React, { Component } from 'react';

class EventCompo extends Component {
   
  

   
  render() {
      let style="";
      if(this.props.id==1)
      {
        style="none"
      }
    return (
         <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.date}</td>
                <td style={{display:style}}><button className="btn btn-danger" onClick={()=>{this.props.del(this.props.id)}}>Delete</button></td>
                 
              </tr>
    );
  }
}

export default EventCompo;
