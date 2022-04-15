const validateData = require("json-server/lib/server/router/validate-data");

const nameError=document.getElementById('name-error');
const phoneError=document.getElementById('phone-error');
const emailError=document.getElementById('email-error');
const messageError=document.getElementById('message-error');
const submitError=document.getElementById('submit-error');



/* Function ValidateName()*/
function validateName(){
    const name=document.getElementById('contact-name').value;
    if(name.length===0){
        nameError.innerHTML='Name Is required !'
        return false;
    }
    if(! name.matches(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name'
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
/* Function validatePhone */
function validatePhone(){
    const phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='phone No is required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML='phone No should be 10 digits';
        return false;
    }
    if(! phone.matches(/^[0-9]{10}$/)){
        phoneError.innerHTML='only digits please';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true
}

/* Function validateEmail*/
function validateEmail(){
let email =document.getElementById('contact-email');

if(email.length==0){
    emailError.innerHTML='email is required !';
    return false
}
if(!email.matches(/^[A-Za-z]\._\-[9-0]*[@][A-Za-z]*[\.][a-z]{2-4}$/)){
    emailError.innerHTML='email invalid!';
    return false
}
emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
return true;

}
/* Function validateMessage*/
function validateMessage(){
let message =document.getElementById('contact-message');
 let required=30;
 let left=required - message.length;
if(left > 0){
    messageError.innerHTML= left + ' more characters  required ';
    return false
}
messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
return true;
}

/* function validateForm()*/
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display='block';
       submitError.innerHTML='please fixed error !' ;
       setTimeout(() =>{submitError.style.display='none';
    },3000)
       return false;
    }
}