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

@NgModule({
  declarations: [
    AppComponent,
    PeriodoComponent,
    RegistrarPeriodoComponent,
    EditarPeriodoComponent,
    NivelAcademicoComponent,
    EditarNivelAcademicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
