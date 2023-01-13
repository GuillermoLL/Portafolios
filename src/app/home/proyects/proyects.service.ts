import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Proyect } from './proyect';

const gitApiUrl = "https://api.github.com/users/guillermoll/repos";

@Injectable({
  providedIn: 'root'
})

export class ProyectsService {

  constructor(private http: HttpClient) { }

  getAllProyects(): Observable<Proyect[] | any> {
    return this.http.get(`${gitApiUrl}`).pipe(
      map((data: any) => {
        let proyects: Proyect[] = []
        data.forEach((proyect: Proyect) =>
          proyects.push({
            ...proyect,
            img: '',
            created_at: new Date(proyect.created_at).getFullYear().toString()
          }))
        return proyects;
      }))
  }

}
