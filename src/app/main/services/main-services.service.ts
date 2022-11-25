import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  private token: String | null = sessionStorage.getItem("token");
  private user: any = sessionStorage.getItem("user");
  constructor(private http: HttpClient) { }

  getFormalities() {
    const {id}=JSON.parse(this.user);
    let headers = new HttpHeaders({"Content-Type": "application/json", "auth-token":`${this.token}`});
    return this.http.get(`http://localhost:3001/api/formalities/${id}`, { headers });
  }
  createFormality(title: string, formalitytype: string, formalitybody: string, iduser: number) {
    let headers = new HttpHeaders({"Content-Type": "application/json", "auth-token":`${this.token}`});
    let body = { iduser: iduser, title: title, formalitytype: formalitytype, formalitybody: formalitybody };
    return this.http.post("http://localhost:3001/api/formalities", body, { headers });
  }
  updateUser( username:string, email:string){
    const {id}=JSON.parse(this.user);
    let headers = new HttpHeaders({"Content-Type": "application/json", "auth-token":`${this.token}`});
    let body = { username: username, email: email };
    return this.http.put(`http://localhost:3001/api/users/${id}`, body, { headers });
  }
  deleteUser(){
    const {id}=JSON.parse(this.user);
    let headers = new HttpHeaders({"Content-Type": "application/json", "auth-token":`${this.token}`});
    return this.http.delete(`http://localhost:3001/api/users/${id}`,{headers});
  }
}
