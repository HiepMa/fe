import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginInfo } from '../../services/auth.service';
import { error } from 'protractor';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  errorMessege;
  public form :FormGroup;
  data : LoginInfo ={} as LoginInfo;
  constructor(private http: HttpClient,private fb : FormBuilder,private router : Router, private authservices : AuthService,private cookieservice :CookieService) {    
  }
  ngOnInit() {
      this.form = this.fb.group({
        userName :[this.data.userName,Validators.compose([Validators.required])],
        passWord :[this.data.passWord,Validators.compose([Validators.required])],
      });
  }
  onSubmit(){
    console.log(this.data);
    this.authservices.login(this.data).subscribe(result =>{
      this.cookieservice.set("userInfo",JSON.stringify(result));
      this.authservices.setLoggedIn(true);
      //redirect the homepage
      this.router.navigate(['/dashboard']);
      this.errorMessege = "";
      console.log(result);
    },error =>{ this.errorMessege = "Sai Username hoac PassWord"});
  }
 }
