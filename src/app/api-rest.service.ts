import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


const URL ="https://devel.cdhidalgo.tecnm.mx/~iraic/foro-rest";
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  login(user:string, pass:string) {
return this.http.get(URL+'/login',
{params:{username:user,password:pass}})
  }
}
