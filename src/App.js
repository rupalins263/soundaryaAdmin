import React, { Component } from 'react';
import './App.css';
import _checkoutApi from './Api.js';
import Login from './Login';
class App extends Component {
    constructor(){
      super();
      this.state={
        site:"Central",
        login:false,
        error:""
      }
      this._ChangeToLogin=this._ChangeToLogin.bind(this);
       this._ChangeToMain=this._ChangeToMain.bind(this);
       this._submit=this._submit.bind(this);
       this._logout=this._logout.bind(this);
    }

    componentWillMount(){
      var login=window.localStorage.getItem("login");
       if(login)
       {
         this.setState({
           login:true
         })
     
       }
    }

     _submit(event){
      event.preventDefault();
      var email=document.getElementById("inputEmail").value;
      var password=document.getElementById("inputPassword").value;
      var res=_checkoutApi(email,password);
      if(res)
      {
          this.setState({
            login:true,
            error:"logged in"
          })
         window.localStorage.setItem("login","true")
      }
      else{
          this.setState({
            error:"invalid emailId or password"
          })
      }

 
   }

   _logout(){
     this.setState({
       login:false
     })
     localStorage.clear();
     console.log("False");
   }


    _ChangeToLogin(event){
        this.setState({
          site:event
        })
        document.getElementById("choose").style.display="none";
        document.getElementById("login").style.display="block";
     }
     _ChangeToMain(event){
 
        document.getElementById("choose").style.display="block";
        document.getElementById("login").style.display="none";
     }
  render() {
   let val="";
   let log=" and Login"
   if(this.state.login)
   {
     val=<button onClick={this._logout}  className="btn btn-danger" style={{float:"right"}}>Log out</button>
     log=""
   }
    return (
   <div className="App">
      

   <div className="container" id="choose">
      {val}
      <h1>Please Choose The Instistution {log} </h1>
    
     <div className="row">
       <div  onClick={()=>{this._ChangeToLogin("SCHOOL")}} className=" col-sm-6 col-md-6 col-lg-6 layout">
          <p>Soundarya School</p>
        </div>

       <div  onClick={()=>{this._ChangeToLogin("CENTRAL")}} className="col-sm-6 col-md-6 col-lg-6 layout">
           <p>Soundarya Central School</p>
        </div>
        
         <div onClick={()=>{this._ChangeToLogin("PUC")}} className=" col-sm-6 col-md-6 col-lg-6 layout">
            <p>Soundarya PU College</p>
        </div>
          <div onClick={()=>{this._ChangeToLogin("SIMS")}} className=" col-sm-6 col-md-6 col-lg-6 layout">
            <p>SIMS</p>
        </div>
       </div>

    </div>
       <div id="login" style={{display:"none"}}>
           <Login site={this.state.site}  _ChangeToMain={this._ChangeToMain} _submit={this._submit} error={this.state.error} login={this.state.login} _logout={this._logout}/>
       </div>
      </div>
    );
  }
}

export default App;
