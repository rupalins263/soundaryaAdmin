import React, { Component } from 'react';
import './App.css';
import SCHOOL from './SCHOOL';
import PUC from './PUC';
import CENTRAL from './CENTRAL';
import _checkoutApi from './Api.js';

class Login extends Component {
    constructor(){
      super();
  

    }




  render() {
   if(this.props.login)
   {
     if(this.props.site==="PUC")
     {
       return <PUC/>
     }
     else if(this.props.site==="CENTRAL"){
        return <CENTRAL/>
     }
     else{
        return <SCHOOL _logout={this.props._logout} _ChangeToMain={this.props._ChangeToMain}/>
     }
   }

   else { 
      
     return (
              <div className="App">
                

              <div className="container">

                  <div className="header_nav">
                  <a href="/" title="Admin Home"><img src="http://central.soundaryainstitutions.in/img/icons/home.png"/></a>
               
               </div>

                  <form className="form-signin" onSubmit={this.props._submit}>
                    <h2 className="form-signin-heading">Soundarya {this.props.site}</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                  </form>
                  <p style={{"color":"red"}}>{this.props.error}</p>
                </div>

                  </div>
                );
         }
     }
}

export default Login;
