import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/Curso';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http : HttpClient) { }


    getcurso() : Observable<Curso[]> { // Observable e assincrono
      return this.http.get<Curso[]>("http://localhost:8080/courses");
    }
}
