import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../models/perfil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(protected http: HttpClient) { }


  private perfilUrl = 'localhost:8080/perfilrest/list?id=2';
  
  
   /*public getPerfiles():Observable<Perfil[]>  {
    return this.http.get<Perfil[]>(this.perfilUrl);
  }*/


  public getPerfiles()  {
    return this.http.get(this.perfilUrl);
}
}