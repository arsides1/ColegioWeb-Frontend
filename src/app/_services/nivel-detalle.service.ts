import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NivelDetalle } from '../_model/nivel-detalle';

@Injectable({
  providedIn: 'root'
})
export class NiveDetalleService {
  nivelDetalleCambio = new Subject<NivelDetalle[]>();
  mensajeCambio = new Subject<string>();
   url:string = `${environment.HOST}/periodo`;
  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<NivelDetalle[]>(`${this.url}/listar`);
  }

  listarPorId(id : number){
    return this.http.get<NivelDetalle>(`${this.url}/buscar/${id}`);
  }

  registrar(periodo : NivelDetalle){
    return this.http.post(`${this.url}/agregar`, periodo);
  }

  modificar(periodo: NivelDetalle){
    return this.http.put(`${this.url}/actualizar`, periodo);
  }

  actualizar(id: number, data: NivelDetalle | null){
    return this.http.put<NivelDetalle>(`${this.url}/editar/${id}`,data);
  }
}
