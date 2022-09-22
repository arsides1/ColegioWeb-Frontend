import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelAcademicoComponent } from './pages/nivel-academico/nivel-academico.component';
import { EditarPeriodoComponent } from './pages/periodo/editar-periodo/editar-periodo.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';

const routes: Routes = [
  {
    path: 'periodo',
    component: PeriodoComponent,
    children: [
      { path: 'nuevo', component: EditarPeriodoComponent },
      { path: 'edicion/:id', component: EditarPeriodoComponent },
    ],
  },

  {path: 'nivel-academico',component: NivelAcademicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
