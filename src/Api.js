function _checkoutApi(email,password){
   var newEmail=email.toUpperCase();
   if(newEmail==="ADMIN@EXAMPLE.COM" && password==="soundarya@123")
   {
       return true;
   }
   else{
       return false;
   }
}



export default _checkoutApi;