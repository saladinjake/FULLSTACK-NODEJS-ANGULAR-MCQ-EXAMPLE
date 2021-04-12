import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const ENCRYPTION_KEY = "KISS-OF-DEATH-IS-THE-SECRET-KEY-TO-LIFE-BEYOND"

import { dummydb, userdb } from '../../models/dummy/dummy.data'

console.log(userdb)

export const verifyToken = (request,response,next) => {
  const token = request.headers('x-access-token');
  if(!token){
    return response.status(401).json(
      {
        status: 200,
        data : result,
        message : "You are required to signup/login to access this page"
      }
    )
  }else{
    try{
      const decode = jwt.verify(token,ENCRYPTION_KEY);
      requet.user = decode;
      return next();
   }catch (err){

     return response.status(403).json(
       {
         status: 403,
         data : [],
         message : "Unauthorized access"
       }
     )

   }
  }
}

export const verifyAdminToken =(request,response,next) =>{
 if(request.user){
     const user = request.user;
     const admin  = request.user.isAdmin ? request.user : null;
     if (!admin){
       return response.status(403).json(
         {
           status: 403,
           data : [],
           message : "Unauthorized access"
         }
       )
     }
     return next();
  }
}


let error ="";
let passed =true;
export class Validator{
  constructor(){
    passed = true;
    error ="";
  }
  static testTitleValidation(description){

  }
  static testIdValidation(id){
    if (typeof id !== 'number') {
      passed = false;
      error = 'Type of id must be a number';
    }
  }
  static testDescriptionValidation(description){
    if (typeof description !== 'string' || description.length > 300) {
      passed = false;
      error = 'Description must be characters not exceeding 300 words';
    }
  }
  static testAllValidation(data){
     Validator.testIdValidation(data.id);
     Validator.testTitleValidation(data.title);
     Validator.testDescriptionValidation(data.description)

     if(passed){
       return next()
     }else{
       return  response.status(403).json(
          {
            status: 400,
            data : [],
            message : "Invalid Input"
          }
        )
     }


  }

  static preventDoubleSignup(request,response,next){
      const {email, password, username} = request.body;

      const user = userdb.filter(user => user.email == email )

      if(user.length > 0){
        //if user exist during login then check matching password
        passed = false;
        error = 'User already exist with this email';
        return  response.status(404).json(
           {
             status: 400,
             data : [],
             message : "User already exist with this email"
           }
         )
      }
      return next();

  }
  static checkPasswordMatch(hashedPassword, password) {
    return bcrypt.compareSync(hashedPassword, password);
  }

  static validateLogin(request,response, next){
    const {email, password} = request.body;
    console.log(email,password)
    passed = true;
    if (typeof email !== 'string' || email.length <= 4) {
      passed = false;
      return  response.status(400).json(
         {
           status: 400,
           data : [],
           message : "Invalid email Input "
         }
       )
    }

    if (typeof password !== 'string' || password.length <= 2) {
      passed = false;
      return  response.status(400).json(
         {
           status: 400,
           data : [],
           message : "Invalid password Input"
         }
       )
    }

    const user = userdb.find(user => user.email == email )
    console.log(user)

    if(!user){
      //if user exist during login then check matching password
      passed = false;
      return  response.status(404).json(
         {
           status: 404,
           data : [],
           message : "User Not found"
         }
       )
    }

    if(user ){
      if (!Validator.checkPasswordMatch(password,user.password) ) {
        passed = false;

        return  response.status(400).json(
           {
             status: 400,
             data : [],
             message : "Password dont match"
           }
         )
      }

    }



    //if all is safe
    if(passed){
      return next()
    }else{

      return  response.status(403).json(
         {
           status: 403,
           data : [],
           message : "Some error occured"
         }
       )

    }

  }



}


export default Validator;
