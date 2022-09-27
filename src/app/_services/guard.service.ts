import { Menu } from './../_model/menu';
import { MenuService } from './menu.service';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router, private loginService: LoginService, private menuService: MenuService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let rpta = this.loginService.estaLogeado();
    console.log('rpta',rpta)
    if (!rpta) {
      this.loginService.logout();
      return false;
    } else {
      //si estas logueado
      let token = localStorage.getItem(environment.TOKEN_NAME);
      let username = this.loginService.getUser();
      console.log('username',username)
      // if (!helper.isTokenExpired(token)) {
        //verificar por roles

        //URL QUE EL USUARIO DESEA ENTRAR
        let url = state.url;
        //VERIFICAR SI ESA URL CORRESPONDE A UN ROL QUE EL USUARIO TENGA
        // const decodedToken = helper.decodeToken(token);

        return this.menuService.listarPorUsuario(username.username).pipe(map((data: Menu[]) => {
          this.menuService.menuCambio.next(data);

          let cont = 0;
          for (let m of data) {
            if (url.startsWith(m.url)) {
              cont++;
              break;
            }
          }

          if (cont > 0) {
            return true;
          } else {
            this.router.navigate(['not-403']);
            return false;
          }
        }));
      // } else {
      //   sessionStorage.clear();
      //   this.router.navigate(['login']);
      //   return false;
      // }
    }
  }
}
