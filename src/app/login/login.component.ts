import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../_services/login.service';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData = {
    "username" : '',
    "password" : '',
  }



  constructor(private loginService: LoginService, private menuService: MenuService, private snackBar: MatSnackBar, private router: Router) {


   }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snackBar.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snackBar.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log('data',data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log('user',user);

          if(this.loginService.getUserRole() == 'ADMIN'){
            console.log('rol_admin')
            //dashboard admin
            //window.location.href = '/admin';

            this.loginService.loginStatusSubjec.next(true);
            this.menuService.listarPorUsuario(user.username).subscribe(data => {
              this.menuService.menuCambio.next(data);
              this.router.navigate(['periodo']);
            });
          }
          else if(this.loginService.getUserRole() == 'SECRETARIA'){
            console.log('rol_normal')
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.loginService.loginStatusSubjec.next(true);
            this.menuService.listarPorUsuario(user.username).subscribe(data => {
              this.menuService.menuCambio.next(data);
              this.router.navigate(['user-dashboard']);
            });
          }
          else{
            this.loginService.logout();
          }
        })


      },(error) => {
        console.log(error);
        this.snackBar.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
    )
  }




}
