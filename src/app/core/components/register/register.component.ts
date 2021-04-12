import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../../sharedlibs/auth.service';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

import  { HelpWithSignUp }  from '../../js/SignupChecker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // providers:[FormBuilder]
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    firstname:'',
    lastname:'',
    phoneNumber:'',
    username:'',
    user_type:'',
    othernames:'',
    passwordRepeat:''
  };

  addForm: FormGroup;
  constructor(private _router: Router, private authService: AuthService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    let that = this;
    this.addForm = this.formBuilder.group({
       username: ['', Validators.required],
       email: ['', Validators.required],
       firstname: ['', Validators.required],
       lastname: ['', Validators.required],
       user_type: ['', Validators.required],
       password: ['', Validators.required],
       phoneNumber: ['', Validators.required],
       repeatPassword: ['', Validators.required,
       // that.passwordsMatchValidator
     ]

     })
 }




  passwordsMatchValidator(control: FormControl): ValidationErrors | null {
    // const password = this.addForm.controls['password'];
    // return password && this.addForm.controls['repeatPassword'].value !== this.addForm.controls['password'].value
    //   ? {
    //       passwordMatch: true,
    //     }
    //   : null;
    return null;
  }








  //method 1 to register with reative form and custom validation
  register() {

    const {
      firstname,lastname,
      //othernames,
      user_type, phoneNumber, email,
      password,username, repeatPassword
    } = this.addForm.getRawValue();

     this.user.firstname = firstname;
     this.user.lastname = lastname;
     this.user.email = email;
     this.user.username = username;
     //this.user.othernames = othernames;
     this.user.password = password;
     this.user.passwordRepeat = repeatPassword;
     this.user.user_type = user_type;
     this.user.phoneNumber = phoneNumber;

     console.log(this.user)

     //do my own validation here before submitting
      const resultingData = HelpWithSignUp.triggerValidation({...this.user});
      if(resultingData){
       this.authService.register(this.user).subscribe( (data) =>{
          this._router.navigate(['']);
       });
      }

  }

 //mth 2
  registerThroughObservable(): void {
      if (this.addForm.invalid) {
        console.log("empty form")
        // return;
      }



    const firstname =this.addForm.controls['firstname'].value;
    const lastname = this.addForm.controls['lastname'].value;
     //othername: string,
    const user_type= this.addForm.controls['user_type'].value;
    const phoneNumber= this.addForm.controls['phoneNumber'].value;
    const email = this.addForm.controls['email'].value;
    const password = this.addForm.controls['password'].value;
    const username= this.addForm.controls['username'].value;
    const repeatPassword =this.addForm.controls['repeatPassword'].value




    this.authService.registerThroughObservable(
        firstname,lastname,
        //othername: string,
        user_type,phoneNumber,email,
        password,username, repeatPassword

      ).subscribe(data => {
        this._router.navigate(['/']);
      });
  }


  registerAction(method){
    const mth = method;
    mth == "basic" ? this.register() : this.registerThroughObservable()
  }





}
