import React, { Component } from 'react';

class EventCompo extends Component {
   
  

   
  render() {

    return (
         <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.date}</td>
                <td><button className="btn btn-danger" onClick={()=>{this.props.del(this.props.id)}}>Delete</button></td>
                 
              </tr>
    );
  }
}

export default EventCompo;
