import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<Object> {
    return this.httpClient.get(this.URL_API);
  }

  getUsuario(nombreUsuario): Observable<Object> {
    return this.httpClient.get(this.URL_API + `/${nombreUsuario}`);
  }

  getTareas(nombreUsuario): Observable<Object> {
    return this.httpClient.get(this.URL_API + `/${nombreUsuario}` + '/tareas');
  }

  getTarea(nombreUsuario, idTarea): Observable<Object> {
    return this.httpClient.get(this.URL_API + `/${nombreUsuario}` + '/tareas' + `/${idTarea}`);
  }

  searchUsuarios(term: string): Observable<Object>{
    if(!term.trim()){
      return of([]);
    }
    return this.httpClient.get(this.URL_API + `/search/${term}`)
      .pipe(tap(_ => console.log(`found usuarios matching "${term}"`)));
  }
}
