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
  public login(loginInfo : LoginInfo){
    return this.http.post(this.api.auth.login, loginInfo,{
      observe : 'body'
    } )
  }
}
