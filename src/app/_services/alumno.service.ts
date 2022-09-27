import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../_model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnoCambio = new Subject<Alumno[]>();
  mensajeCambio = new Subject<string>();
   url:string = `${environment.HOST}/periodo`;
  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Alumno[]>(`${this.url}/listar`);
  }

  listarPorId(id : number){
    return this.http.get<Alumno>(`${this.url}/buscar/${id}`);
  }

  registrar(periodo : Alumno){
    return this.http.post(`${this.url}/agregar`, periodo);
  }

  modificar(periodo: Alumno){
    return this.http.put(`${this.url}/actualizar`, periodo);
  }

  actualizar(id: number, data: Alumno | null){
    return this.http.put<Alumno>(`${this.url}/editar/${id}`,data);
  }
}
