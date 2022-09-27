import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apoderado } from '../_model/apoderado';

@Injectable({
  providedIn: 'root'
})
export class ApoderadoService {
  apoderadoCambio = new Subject<Apoderado[]>();
  mensajeCambio = new Subject<string>();
   url:string = `${environment.HOST}/periodo`;
  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Apoderado[]>(`${this.url}/listar`);
  }

  listarPorId(id : number){
    return this.http.get<Apoderado>(`${this.url}/buscar/${id}`);
  }

  registrar(periodo : Apoderado){
    return this.http.post(`${this.url}/agregar`, periodo);
  }

  modificar(periodo: Apoderado){
    return this.http.put(`${this.url}/actualizar`, periodo);
  }

  actualizar(id: number, data: Apoderado | null){
    return this.http.put<Apoderado>(`${this.url}/editar/${id}`,data);
  }
}

}
