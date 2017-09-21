import React, { Component } from 'react';

class AlbumCompo extends Component {
   
   
  render() {
          let style={
             display:"block",
           
           }
      if(this.props.id==1)
      {
        style={
          display:"none",
          "pointer-events":"none"
        }
      }
    return (
         <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.desc}</td>
                <td><button onClick={()=>{this.props.watch(this.props.id)}} className="btn btn-success">Watch</button> </td>
                <td style={style}><button  onClick={()=>{this.props.del(this.props.id)}} className="btn btn-danger">Delete</button></td>
                
         </tr>
    );
  }
}

export default AlbumCompo;
