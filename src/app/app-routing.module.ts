import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GradoSeccionComponent } from './pages/grado-seccion/grado-seccion.component';
import { NivelAcademicoComponent } from './pages/nivel-academico/nivel-academico.component';
import { NivelDetalleComponent } from './pages/nivel-detalle/nivel-detalle.component';
import { EditarPeriodoComponent } from './pages/periodo/editar-periodo/editar-periodo.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';
import { GuardService } from './_services/guard.service';

const routes: Routes = [

  {
    path: 'periodo',
    component: PeriodoComponent,
    children: [
      { path: 'nuevo', component: EditarPeriodoComponent },
      { path: 'edicion/:id', component: EditarPeriodoComponent },
    ], canActivate: [GuardService]
  },

  {path: 'nivel-academico',component: NivelAcademicoComponent, canActivate: [GuardService]},
  {path: 'grado-seccion', component: GradoSeccionComponent, canActivate: [GuardService]},
  {path: 'nivel-detalle', component: NivelDetalleComponent, canActivate: [GuardService]},

  { path:'login', component: LoginComponent},
  {path:'login', loadChildren:()=> import('./material/material.module').then(x => x.MaterialModule)},
  { path:'**', redirectTo: 'login', pathMatch: 'full'},
  { path: '', redirectTo: 'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
