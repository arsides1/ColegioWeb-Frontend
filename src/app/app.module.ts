import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeriodoComponent } from './pages/periodo/periodo.component';
import { MaterialModule } from './material/material.module';
import { RegistrarPeriodoComponent } from './pages/registrar-periodo/registrar-periodo.component';
import { EditarPeriodoComponent } from './pages/periodo/editar-periodo/editar-periodo.component';
import { NivelAcademicoComponent } from './pages/nivel-academico/nivel-academico.component';
import { EditarNivelAcademicoComponent } from './pages/nivel-academico/editar-nivel-academico/editar-nivel-academico.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { GradoSeccionDialogoComponent } from './pages/grado-seccion/grado-seccion-dialogo/grado-seccion-dialogo.component';
import { GradoSeccionComponent } from './pages/grado-seccion/grado-seccion.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_services/auth.interceptor';
import { GradoNivelComponent } from './pages/grado-nivel/grado-nivel.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { NivelDetalleComponent } from './pages/nivel-detalle/nivel-detalle.component';
import { ApoderadoComponent } from './pages/apoderado/apoderado.component';
import { EditarApoderadoComponent } from './pages/apoderado/editar-apoderado/editar-apoderado.component';
import { EditarAlumnoComponent } from './pages/alumno/editar-alumno/editar-alumno.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { EditarNivelDetalleComponent } from './pages/nivel-detalle/editar-nivel-detalle/editar-nivel-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodoComponent,
    RegistrarPeriodoComponent,
    EditarPeriodoComponent,
    NivelAcademicoComponent,
    EditarNivelAcademicoComponent,
    GradoSeccionComponent,
    GradoSeccionDialogoComponent,
    LoginComponent,
    GradoNivelComponent,
    AlumnoComponent,
    NivelDetalleComponent,
    ApoderadoComponent,
    EditarApoderadoComponent,
    EditarAlumnoComponent,
    UsuarioComponent,
    EditarNivelDetalleComponent
  ],entryComponents:[EditarNivelAcademicoComponent,GradoSeccionDialogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule

  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
