import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  login() {
return this.http.get("172.17.123.57/foro-rest-final/public/login",
{params:{username:"admin",password:"123"}})
  }
}
