import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginInfo } from '../../services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  errorMessege;
  public form :FormGroup;
  data : LoginInfo ={} as LoginInfo;
  constructor(private http: HttpClient,private fb : FormBuilder,private router : Router, private authservices : AuthService) {    
  }
  ngOnInit() {
      this.form = this.fb.group({
        userName :[this.data.userName,Validators.compose([Validators.required])],
        passWord :[this.data.passWord,Validators.compose([Validators.required])],
      });
  }
  login() {
    this.http.get("http://www.saigontech.edu.vn/restful-api/readers-free.php").subscribe(result => {
      console.log(result);
    });
  }
  onSubmit(){
    this.authservices.login(this.data).subscribe(result =>{
      console.log(result);
    },error =>{ console.log(error)});
  }
 }
