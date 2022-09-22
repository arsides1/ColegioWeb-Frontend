import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nivel } from 'src/app/_model/nivel';
import { NivelService } from 'src/app/_services/nivel.service';

@Component({
  selector: 'app-editar-nivel-academico',
  templateUrl: './editar-nivel-academico.component.html',
  styleUrls: ['./editar-nivel-academico.component.css']
})
export class EditarNivelAcademicoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
