import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Credenciales } from './credenciales';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "http://192.168.1.24:8000/api/";

  constructor(private http:HttpClient) { }

  singin(user:Credenciales){
    return this.http.post(this.apiURL+'usuarios',user);
  }

  singout(){
    return this.http.post(this.apiURL+'logout',"");
  }
}
