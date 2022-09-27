import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Nivel } from 'src/app/_model/nivel';
import { Periodo } from 'src/app/_model/periodo';
import { NivelService } from 'src/app/_services/nivel.service';
import { PeriodoService } from 'src/app/_services/periodo.service';

@Component({
  selector: 'app-editar-nivel-academico',
  templateUrl: './editar-nivel-academico.component.html',
  styleUrls: ['./editar-nivel-academico.component.css']
})
export class EditarNivelAcademicoComponent implements OnInit {
  nivel!: Nivel;
  periodo!: Periodo;
  listPeriodo!: Periodo[];
  nhoraInicio!: string;
  nminutosInicio!: string;
  nhoraFin!: string;
  nminutosFin!: string;


  constructor(public dialogRef: MatDialogRef<EditarNivelAcademicoComponent>,
    private periodoService: PeriodoService, @Inject(MAT_DIALOG_DATA) public data: Nivel, private nivelService: NivelService) { }


  ngOnInit(): void {
    this.nivel = new Nivel();
    this.nivel.idNivel = this.data?.idNivel;
    this.periodo = new Periodo();
    this.periodo.descripcion = this.data?.idPeriodo?.descripcion;
    this.nivel.idPeriodo = this.periodo;
    this.nivel.descripcionNivel = this.data?.descripcionNivel;
    this.nivel.descpricionTurno = this.data?.descpricionTurno;
    this.nivel.horaInicio = this.data?.horaInicio;

    this.nivel.horaFin = this.data?.horaFin;
    this.cargarperiodo()

  }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    if (this.nivel != null && this.nivel.idNivel > 0) {
      //BUENA PRACTICA
      this.nivelService.modificar(this.nivel).pipe(switchMap(() => {
        return this.nivelService.listar();
      })).subscribe(niveles => {
        this.nivelService.nivelCambio.next(niveles);
        this.nivelService.mensajeCambio.next("SE MODIFICO");
      });
    } else {
      //MALA PRACTICA SUBSCRIBE DENTRO DE OTOR SUBSCRIBE
      this.nivelService.registrar(this.nivel).subscribe(() => {
        this.nivelService.listar().subscribe(niveles => {
          this.nivelService.nivelCambio.next(niveles);
          this.nivelService.mensajeCambio.next("SE REGISTRO");
        });
      });
    }
    this.dialogRef.close();
  }

  cargarperiodo(){
    this.periodoService.listar().subscribe(
      (data) => {
        console.log('periodos');
        console.log(data);
        this.listPeriodo = data;
        this.listPeriodo.forEach(element => {
          if (element.estado == true) {
            console.log('element',element)
            this.periodo = element;
            let periodonew = new Periodo();
            periodonew.idPeriodo = element.idPeriodo;
            this.nivel.idPeriodo = periodonew;

          }
        });
      },
      (error) => {
        console.log(error);
        // this.mensaje = 'No se puedo obetener las secciones disponibles';
      }
    );
  }

}
