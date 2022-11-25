import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  private token: String | null = sessionStorage.getItem("token");
  constructor(private http: HttpClient) { }
  createAuthorizationHeaders(headers: HttpHeaders) {
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY5MzY4ODQwfQ.BRjkNzXf7ffddxoti7WSxuQSU0-EaJ_P8YAMFGQaWno`);
  }
  getFormalities() {
    let headers = new HttpHeaders();
    this.createAuthorizationHeaders(headers);
    return this.http.get("http://localhost:3001/api/formalities", { headers });
  }
  createFormality(title: string, formalitytype: string, formalitybody: string, iduser: number) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeaders(headers);
    let body = { iduser: iduser, title: title, formalitytype: formalitytype, formalitybody: formalitybody };
    return this.http.post("http://localhost:3001/api/formalities", body, { headers });
  }
}
