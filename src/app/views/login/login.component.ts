import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {    
  }
  ngOnInit() {

  }
  login() {
    this.http.get("http://www.saigontech.edu.vn/restful-api/readers-free.php").subscribe(result => {
      console.log(result);
    });
  }
 }
