// import $ from 'jquery';
// alertify.set('notifier','position', 'top-left');
//
 let terms_and_cond = 'not selected';
// document.addEventListener('DOMContentLoaded',(e)=>{
//  const terms_and_condition_checker = document.getElementById("checkbox-signup");
//    if(document.getElementById('signup_page'))
//     terms_and_condition_checker.addEventListener("click",(e)=>{
//
//        if(terms_and_cond=="not selected"){
//          e.target.value="off"
//          terms_and_cond ='selected'
//        }else{
//         e.target.value="on"
//         terms_and_cond = 'not selected';
//        }
//     })
// })

const validNameRegularExpression = /^[A-Za-z]{3,30}$/;
const othernamesRegularExpression = /^[a-zA-Z]'?([a-zA-Z]|\.| |-){4,}$/;
const usernameRegularExpression = /^[A-Za-z0-9]{3,20}$/;
const emailRegularExpression = /\S+@\S+\.\S+/;
const passwordRegularExpression = /^[A-Za-z0-9]{4,}$/;
const phoneNumberRegularExpression = /^(\+?234|0)?[789]\d{9}$/;
const validateLastnameRegex=/^[A-Za-z\d_-]+$/;

export class HelpWithSignUp {
  static validatePassword(password, confirmPassword) {

    if (password === confirmPassword) {
      return true;
    }
    // var notification = alertify.notify('Password do not match.', 'error', 5, function(){  console.log('dismissed'); });

    return false;
  }

  static validateSignup({
    firstname,
    lastname,
    user_type,
    username,
    email,
    phoneNumber,
    password,

  }) {



    let hasBeenValidated = true;
    if (!validNameRegularExpression.test(firstname)) {
      hasBeenValidated = false;
      console.log('fn err')
      // var notification = alertify.notify('Invalid firstname', 'error', 5, function(){  console.log('dismissed'); });

    }

    if (!validateLastnameRegex.test(lastname)) {
      hasBeenValidated = false;
      console.log('ln err')
      // var notification = alertify.notify('Invalid lastname', 'error', 5, function(){  console.log('dismissed'); });

    }

    if (!othernamesRegularExpression.test(user_type)) {
      hasBeenValidated = false;
      console.log('ot err')
      // var notification = alertify.notify('Invalid usertype', 'error', 5, function(){  console.log('dismissed'); });

    }

    if (!usernameRegularExpression.test(username)) {
      hasBeenValidated = false;
      console.log('un err')
      // var notification = alertify.notify('Invalid username', 'error', 5, function(){  console.log('dismissed'); });

    }

    if (!emailRegularExpression.test(email)) {
      hasBeenValidated = false;
      console.log('em err')
      // var notification = alertify.notify('Invalid email', 'error', 5, function(){  console.log('dismissed'); });

    }

    if (!phoneNumberRegularExpression.test(phoneNumber)) {
      hasBeenValidated = false;
      console.log('ph err')
      // var notification = alertify.notify('Invalid phone number', 'error', 5, function(){  console.log('dismissed'); });

    }

    if (!passwordRegularExpression.test(password)) {
      hasBeenValidated = false;
      console.log('pw err')
      // var notification = alertify.notify('Invalid password', 'error', 5, function(){  console.log('dismissed'); });

    }
    return hasBeenValidated;
  }

  static triggerValidation({
    firstname,
    lastname,
    username,
    othernames,
    email,
    password,
    user_type,
    passwordRepeat,
    phoneNumber}) {


    // const email = email;
    // const phoneNumber = phoneNumber;
    // const password = password;
    // const confirmPassword = passwordRepeat;
    // const firstname = firstname;
    // const lastname = lastname;
    // const username = username;

    //const othernames = document.getElementById('othernames').value;
    var user_type= user_type;

    const info = {
      firstname,
      lastname,
      user_type,
      username,
      email,
      phoneNumber,
      password,
      terms_and_cond,
      passwordRepeat
    };

    const isValid = HelpWithSignUp.validateSignup(info);
    if (!isValid) {
      console.log('false from HelpWithSignUp.validateSignup(info)');
      return false;
    }
    const result = HelpWithSignUp.validatePassword(info.password, passwordRepeat);
    if (!result) {
      console.log('false from HelpWithSignUp.validatePassword(info.password, confirmPassword)');
      return false;
    }
    return info;
  }


}
