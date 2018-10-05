import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

export interface LoginInfo{
  userName : string;
  passWord : string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private api : ApiService,private http :HttpClient) { }
  private loggedInStatus =JSON.parse (localStorage.getItem('loggedIn' || 'false'));

  setLoggedIn(value : boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value.toString());
  }

  get isLoggedIn(){
    return JSON.parse (localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  
  public login(loginInfo : LoginInfo){
    return this.http.post(this.api.auth.login, loginInfo,{
      observe : 'body'
    } )
  }
}
