import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { GradoSeccion } from 'src/app/_model/grado-seccion';
import { NivelDetalle } from 'src/app/_model/nivel-detalle';
import { GradoSeccionService } from 'src/app/_services/grado-seccion.service';
import { NiveDetalleService } from 'src/app/_services/nivel-detalle.service';


@Component({
  selector: 'app-nivel-detalle',
  templateUrl: './nivel-detalle.component.html',
  styleUrls: ['./nivel-detalle.component.css']
})
export class NivelDetalleComponent implements OnInit {

  dsGradoSeccionOri: GradoSeccion[]=[];
  dsGradoSeccionDes: GradoSeccion[]=[];
  dataSourceDes!: MatTableDataSource<GradoSeccion>;
  displayedColumnsDes: string[] = ['itm','desGrado','desSeccion']

  gradoSeccion!: GradoSeccion;
  dataSource!: MatTableDataSource<GradoSeccion>;
  displayedColumns: string[] = ['itm','seleccion','desGrado','desSeccion']
  nivelDetalle!: NivelDetalle[];
  selection = new SelectionModel<GradoSeccion>(true, []);

  constructor(private gradoSeccionService: GradoSeccionService, private route: ActivatedRoute, nivelDetalleService: NiveDetalleService,
    private router: Router, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.gradoSeccionService.listar().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }
  /*isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
     numSelected === numRows;
  }*/


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    console.log(this.dsGradoSeccionDes);
    this.dsGradoSeccionDes.splice(0)
    // console.log("aqui 2")
    if (this.isAllSelected()){
      this.selection.clear()
      this.dsGradoSeccionDes.splice(0)
    } else{

      this.dataSource.data.forEach(row =>{
        this.selection.select(row)
        this.dsGradoSeccionDes.push(row);
      })
    }
  }

  isOneSelected(row: GradoSeccion): string {
     console.log("tttt",row)
    if (!row) {
      // console.log("o sera aqui?")
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }

    if (!this.selection.isSelected(row)){
       this.dsGradoSeccionDes.push(row);
        console.log("aqui?")
        console.log(this.dsGradoSeccionDes)
    }else{
      // console.log("acaso es aqui?", this.detalleCotizaVtaEnvia)
      this.dsGradoSeccionDes.forEach(element =>{

        if (element.idGradoSeccion == row.idGradoSeccion){
          var i = this.dsGradoSeccionDes.indexOf(element);
          // console.log("var", i)
          if (i >= 0){
            //console.log("borron",i)
            this.dsGradoSeccionDes.splice(i,1);
          }
        }
      })
    }

    this.dataSourceDes = new MatTableDataSource(this.dsGradoSeccionDes);

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.idGradoSeccion + 1}`;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: GradoSeccion): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.idGradoSeccion + 1}`;
  // }
}
