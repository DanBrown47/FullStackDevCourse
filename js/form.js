 let email=document.getElementById("email");
 let error=document.getElementById("error");
 function validate(){
       let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         if(regexp.test(email.value)){
             error.innerHTML="Success....";
             error.style.color="green";
             email.style.border="2px solid green";
             return true;
         }

          else{
              error.innerHTML="** Proper Email format is Mandatory!";
              error.style.color="red";
              email.style.border="2px solid red";
              return false;
          }
}

let pwd=document.getElementById("pwd");
let pword=document.getElementById("pword");
function password(){
    let pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    if(pass.test(pwd.value)){
        pword.innerHTML="Success...";
        pword.style.color="green";
        pwd.style.border="2px solid green";
        return true;
    }

    else{
        pword.innerHTML=" ** password must contain 8 minimum characters, atleast 1 uppercase, 1 lowercase and  must contain atleast 1 number!!";
        pword.style.color="red";
        pwd.style.border="2px solid red";
        return false;
    }
} 



 var pass=document.getElementById("pwd");
 pass.addEventListener('keyup',function(){
     checkPassword(pass.value)
 })
 function checkPassword(password){
     var strengthBar = document.getElementById("strength");
     var bar_color =  document.getElementById("prog_color");

     var strength=0; 
     if(password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
         strength+=1
     }
     if(password.match(/[~<>?]+/)){
         strength+=1
     }
     if(password.match(/[!@#$%^&*()]+/)){
         strength+=1 
     }
     if(password.length>5){
         strength+=1
     }
     switch(strength){
         case 0:
             strengthBar.value=0;
             break;
        case 1:
             strengthBar.value=25;
             break;
         case 2:
             strengthBar.value=50;
             break;
         case 3:
             strengthBar.value=75;
             break;
         case 4:
             strengthBar.value=100;
             break;
     }
     
 }



let number=document.getElementById("number");
let no=document.getElementById("no");
function phone(){
    let contact=/^\(?([0-9]{3})\)?[- .]?([0-9]{3})[- .]?([0-9]{4})$/;
    if(contact.test(number.value)){
        no.innerHTML="success...";
        no.style.color="green";
        number.style.border="2px solid green";
        return true;
    }
    else{
        no.innerHTML="** Enter numbers only, should contain 10 numbers only!! ";
        alert('** Accept the 3 formats: xxx-xxx-xxxx, xxx.xxx.xxxx, xxx xxx xxxx');
        no.style.color="red";
        number.style.border="2px solid red";
        return false;
    }
}

 let first=document.getElementById("first");
 let last=document.getElementById("last");
   function username(){
//  let Regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
if(Regexp.test(first.value)){
    last.innerHTML="Success....";
    last.style.color="green";
    first.style.border="2px solid green";
    return true;
  }
 else{
    last.innerHTML="** Enter your Name!!";
        last.style.color="red";
         first.style.border="2px solid red";
         return false;
     }
 }

 



