// import $ from 'jquery';
// alertify.set('notifier','position', 'top-left');
//

const emailRegularExpression = /\S+@\S+\.\S+/;
const passwordRegularExpression = /^[A-Za-z0-9]{4,}$/;


export class HelpWithLogin {

  static validateLogin({

    email,

    password,

  }) {



    let hasBeenValidated = true;

    if (!emailRegularExpression.test(email)) {
      hasBeenValidated = false;
      console.log('em err')
      // var notification = alertify.notify('Invalid email', 'error', 5, function(){  console.log('dismissed'); });

    }


    if (!passwordRegularExpression.test(password)) {
      hasBeenValidated = false;
      console.log('pw err')
      // var notification = alertify.notify('Invalid password', 'error', 5, function(){  console.log('dismissed'); });

    }
    return hasBeenValidated;
  }

  static triggerValidation({
    email,
    password,
    }) {



    const info = {
      email,
      password,
    };

    const isValid = HelpWithLogin.validateLogin(info);
    if (!isValid) {
      console.log('false from HelpWithSignUp.validateSignup(info)');
      return false;
    }

    return info;
  }

  static triggerEmailValidationForResetPassword({
    email
    }){

      const info = {
        email,
      };

      let hasBeenValidated = true;
      if (!emailRegularExpression.test(email)) {
        hasBeenValidated = false;
        console.log('em err')
        // var notification = alertify.notify('Invalid email', 'error', 5, function(){  console.log('dismissed'); });
        return   hasBeenValidated;
      }
      return info;

  }


  static validatePasswordMatch(password, confirmPassword) {

    if (password === confirmPassword) {
      return true;
    }
    // var notification = alertify.notify('Password do not match.', 'error', 5, function(){  console.log('dismissed'); });

    return false;
  }


}
