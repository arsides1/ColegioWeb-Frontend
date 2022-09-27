import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matricula } from '../_model/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  matriculaCambio = new Subject<Matricula[]>();
  mensajeCambio = new Subject<string>();
   url:string = `${environment.HOST}/periodo`;
  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Matricula[]>(`${this.url}/listar`);
  }

  listarPorId(id : number){
    return this.http.get<Matricula>(`${this.url}/buscar/${id}`);
  }

  registrar(periodo : Matricula){
    return this.http.post(`${this.url}/agregar`, periodo);
  }

  modificar(periodo: Matricula){
    return this.http.put(`${this.url}/actualizar`, periodo);
  }

  actualizar(id: number, data: Matricula | null){
    return this.http.put<Matricula>(`${this.url}/editar/${id}`,data);
  }
}
