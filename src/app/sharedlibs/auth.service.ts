import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Config, API_URL} from '../config/Config';

import { Observable, BehaviorSubject, Subject, EMPTY } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';
import { User, AuthResponse } from './interface/index';

import { TokenStorage } from './token.store';

import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null); // new Subject<User | nul>(null) //you can use subject
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': token
    })
  };

  constructor(private _router: Router, private _http: HttpClient,private _tokenStorage:TokenStorage) { }
  //simple registration without observables
  register(user) {
    return this._http.post( `${API_URL}/signup`, user,this.httpOptions);
  }
  //simple login with out observables
  login(user) {
    // let token;
        // if (this._auth.isAuthenticated()) {
        //   const user = JSON.parse(this._auth.isAuthenticated());
        //   token = user.token ? user.token : '';
        // }

    return this._http.post( `${API_URL}/signin`, user, this.httpOptions);
  }

  sendForgetPasswordInstruction(user){
      return this._http.post( `${API_URL}/password-forgot`, user,this.httpOptions);
  }

  changePassword(user){
      return this._http.post( `${API_URL}/password-reset`, user,this.httpOptions);
  }

  //regular logout without observables
  logout() {
    localStorage.clear();
    this._router.navigate(['/signin']);
  }

   //to do: more implementation by cleaning out subscription
  isAuthenticated() {
    return localStorage.getItem('user');
  }




  //complex login through observables
  loginThrough(email: string, password: string): Observable<User> {
    let that  = this;
    return this._http
      .post<AuthResponse>(`${API_URL}/signin`, { email, password },this.httpOptions)
      .pipe(
        tap(({ token, user }) => {
          that.setUser(user);
          that._tokenStorage.saveToken(token);
        }),
        pluck('user')
      );
  }


  //register through observeables
   registerThroughObservable(

     firstname: string,lastname: string,
     //othername: string,
     user_type: string,phoneNumber: string,email: string,
     password: string,username: string, repeatPassword: string
   ): Observable<User> {
     return this._http
       .post<AuthResponse>(`${API_URL}/signup`, {
         firstname,
         lastname,
         //othernames,
         user_type,
         phoneNumber,
         email,
         password,
         repeatPassword
       }, this.httpOptions)
       .pipe(
         tap(({ token, user }) => {
           this.setUser(user);
           this._tokenStorage.saveToken(token);
         }),
         pluck('user')
       );
   }



  setUser(user: User | null): void {
    if (user) {
      user.isAdmin = user.roles.includes('admin');
    }
    this.user$.next(user);
    // window.user = user;
  }




  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  signOut(): void {
    this._tokenStorage.signOut();
    this.setUser(null);
    // delete window.user;
  }


  getAuthorizationHeaders() {
    const token: string | null = this._tokenStorage.getToken() || '';
    return { Authorization: `Bearer ${token}` };
  }



  tokenStillValid(): Observable<User> {
    const token: string | null = this._tokenStorage.getToken();

    if (token === null) {
      return EMPTY;
    }

    return this._http.get<AuthResponse>(`${API_URL}/token-matches-user`,this.httpOptions).pipe(
      tap(({ user }) => this.setUser(user)),
      pluck('user')
    );

  }


  isUserStillLoggedIn(): Promise<User> {
     return this.tokenStillValid().toPromise();
  }



}
