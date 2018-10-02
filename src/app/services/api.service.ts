import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  baseURL ='https://localhost:44381/api/';
  auth = {
    login : this.baseURL='auth/token'
  }
  getApiLink(name : string){
    return this.baseURL + '/' +name;
  }
}
