import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../sharedlibs/auth.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import  { HelpWithLogin }  from '../../js/loginChecker';



@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
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

  form : FormGroup;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(private fb: FormBuilder,private _router: Router,private authService: AuthService) {
    this.form = fb.group({
       email : new FormControl({value: ''},
        Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(this.emailRegex)
          ])
        )
    });

   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.controls['email'].value)

    const validationRequest = HelpWithLogin.triggerEmailValidationForResetPassword({
      ...this.user
    })

    if(validationRequest !=false){
      this.authService.sendForgetPasswordInstruction(this.user).subscribe(data => {
        this._router.navigate(['']);
      });
    }
  }

}
