import React, { Component } from 'react';

class EventCompo extends Component {
   
   
  render() {
           let style={
             display:"block"
           };
      if(this.props.id==1)
      {
        style={
          display:"none"
        }
      }
    return (
         <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td><button className="btn btn-danger">Delete</button></td>
                 <td style={style}><button className="btn btn-success">Add</button></td>
              </tr>
    );
  }
}

export default EventCompo;
