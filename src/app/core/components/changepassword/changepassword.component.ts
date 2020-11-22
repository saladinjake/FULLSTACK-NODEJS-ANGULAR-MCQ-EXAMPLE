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

import {  PWChangeValidators } from '../../js/ChangePasswordChecker'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  // directives: [REACTIVE_FORM_DIRECTIVES]

})
export class ChangepasswordComponent implements OnInit {
  pwChangeForm: FormGroup;
 // Properties that store paths to FormControls makes our template less verbose
 current: AbstractControl;
 newPW: AbstractControl;
 confirm: AbstractControl;

 constructor(private fb: FormBuilder,private _router: Router,private authService: AuthService) { }
 ngOnInit() {
    this.pwChangeForm = this.fb.group({
      current: ['', Validators.required],
      newPW: ['', Validators.required],
      confirm: ['', Validators.required]
    }, {
       // Here we create validators to be used for the group as a whole
         validator: Validators.compose([
            PWChangeValidators.newIsNotOld,
            PWChangeValidators.newMatchesConfirm
         ])
  });

  }

 submit(){
   // this.current = this.pwChangeForm.controls['current'];
   this.newPW = this.pwChangeForm.controls['newPW'];
   this.confirm = this.pwChangeForm.controls['confirm'];


   //do my own check for same newMatches


   const validMatches = HelpWithLogin.validatePasswordMatch(this.newPW, this.confirm)

   if(validMatches){
     this.authService.sendForgetPasswordInstruction({
      password: this.newPW.value,
      passwordRepeat:  this.confirm.value
     }).subscribe(data => {
       this._router.navigate(['']);
     });
   }



   console.log(this.current,this.newPW.value,this.confirm.value)
 }

}
