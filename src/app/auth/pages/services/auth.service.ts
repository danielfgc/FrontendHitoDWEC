import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    login(email: String, pass:String){
      let headers = new HttpHeaders({"Content-Type":"application/json"});
      let body = {pass: pass, email:email};
      return this.http.post("http://localhost:3001/api/auth/login", body, {headers});
    }
    register(email: String, pass:String, username:String){
      let headers = new HttpHeaders({"Content-Type":"application/json"});
      let body = {password: pass, email:email, username: username};
      return this.http.post("http://localhost:3001/api/auth/register", body, {headers});
    }
}
