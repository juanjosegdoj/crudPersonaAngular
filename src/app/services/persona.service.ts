import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private ENDPOINT_BASE = 'http://localhost:8080/api';

  private headerText = new HttpHeaders({'Content-Type': 'text/plain'});
  private headerJson = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {}

  listAll(): Observable <Persona[]> {
    return this.http.get< Persona[]>(this.ENDPOINT_BASE.concat('/listar'));
  }

  delete(id: number): Observable<Persona> {
    return this.http.delete<Persona>(this.ENDPOINT_BASE.concat('/eliminar/').concat(id.toString()), {headers: this.headerText});
  }

  createPersona(object: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.ENDPOINT_BASE.concat('/insertar'), object, {headers: this.headerJson});
  }

  updatePersona(object: Persona): Observable<Persona> {
    return this.http.put<Persona>(
      this.ENDPOINT_BASE.concat('/actualizar'), object, {headers: this.headerJson}
      );
  }
}
