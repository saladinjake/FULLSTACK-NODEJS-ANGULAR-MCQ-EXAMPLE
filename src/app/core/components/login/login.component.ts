import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../../sharedlibs/auth.service';
import { Router } from '@angular/router';

import  { HelpWithLogin }  from '../../js/loginChecker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
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


  //or This
  email: string | null = null;
  password: string | null = null;
  errorBag = [];

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login() {
    this.user.email = this.email;
    this.user.password = this.password;

    //perform login vaildation
    const validationRequest = HelpWithLogin.triggerValidation({
      ...this.user
    })

    if(validationRequest){
      this.authService.login(this.user).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this._router.navigate(['/dashboard']);
      });
    }


    // console.log(this.user)
  }

  loginThroughObservable(): void {
    this.authService.loginThrough(this.email!, this.password!).subscribe(() => {
      this._router.navigateByUrl('/');
    });
    // console.log(this.email!, this.password!)
  }

  loginAction(methd:string){
    const meth = methd;
    meth == 'basic'? this.login(): this.loginThroughObservable();
  }
}
