import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../_model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuCambio = new Subject<Menu[]>();
  url: string = `${environment.HOST}`;
  constructor(private http: HttpClient) { }

  listarPorUsuario(nombre: string){
    let token = localStorage.getItem(environment.TOKEN_NAME);
    return this.http.get<Menu[]>(`${this.url}/usuarios/usuarioos/${nombre}`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
