import { environment } from '../../environments/environment';
import { Consultas } from '../models/consultas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  URL: string = 'https://app-mean-ng.herokuapp.com/api'
  // URL = environment.URL;

  constructor(private http: HttpClient) { }

  guerdarConsulta(consulta: Consultas): Observable<any> {
    return this.http.post(this.URL, consulta)
  }



}
