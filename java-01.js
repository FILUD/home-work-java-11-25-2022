console.log("HELLO JAVA");
var attempt = 3; 
function login(){
var username = document.getElementById("username").value;
console.log(username);
var password = document.getElementById("password").value;
console.log(password);

//data addmin
if ( username == "admin@gmail.com" && password == "123456789"){
alert ("Login successfully");
window.location = "Admin-interface.html";
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit-login").disabled = true;
return false;
}
}
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


//data user
if ( username == "user@gmail.com" && password == "123456789"){
alert ("Login successfully");
window.location = "User-interface.html";
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit-login").disabled = true;
return false;
}
}


//error
if ( username == "" && password == ""){
    
    return false;
    }
    else{
    if( attempt == 0){
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
   
    
//incorrect 
if ( username == "" && password == ""){
    return false;
    }
    else{
    alert("Your username or password is incorrect");
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
        

}