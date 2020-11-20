let email2=document.getElementById("loginmail");
let error_mail=document.getElementById("mailerror");
function check(){
       console.log("Here");
       let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         if(regexp.test(email2.value)){
             error_mail.innerHTML="Success!!";
             error_mail.style.color="green";
             email_mail.style.border="2px solid green";
             return true;
         }

          else{
              error_mail.style.color="red";
              error_mail.innerHTML="** Proper Email format is Mandatory!";
              email_mail.style.border="2px solid red";
              return false;
          }
}
let pwd2=document.getElementById("passwd");
let pword2=document.getElementById("passout");
function password_check(){
    let pass2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    if(pass2.test(pwd2.value)){
        pword2.innerHTML="Success!!";
        alert("Welcome to kerala Tourism !!");
        pword2.style.color="green";
        pwd2.style.border="2px solid green";
        return true;
    }

    else{
        pword2.innerHTML=" ** password must contain 8 minimum characters, atleast 1 uppercase, 1 lowercase and  must contain atleast 1 number!!";
        pword2.style.color="white";
        pwd2.style.border="2px solid red";
        return false;
    }
} 

