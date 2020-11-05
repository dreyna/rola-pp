import { Injectable } from '@angular/core';

import {Observable, Subscription, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private rolUrl:string = 'http://localhost:8080/roles';//endpoint
  constructor(private http: HttpClient) { }

  getRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.rolUrl+'/all');
  }
  getRol(id:number):Observable<Rol[]> {
    return this.http.get<Rol[]>(this.rolUrl+'/'+id);
  }
  addRol(rol: Rol): Observable<number>{
    return this.http.post<number>(this.rolUrl+"/add", rol, {headers:this.httpHeaders});
  }

  deleteRol(rol: Rol) {
    return this.http.delete(this.rolUrl+'/delete/'+rol.ID_ROL);
  }

  updateRol(rol: Rol) {
    return this.http.put(`${this.rolUrl}/update/`, rol);
  }
}
