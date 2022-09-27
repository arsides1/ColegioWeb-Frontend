import { ɵHttpInterceptingHandler } from "@angular/common/http";
import { Alumno } from "./alumno";
import { Apoderado } from "./apoderado";
import { Periodo } from "./periodo";

export class Matricula {
  idMatricula!: number;
  codigoMatricula!: string;
  situacion!: string;
  idNivelDetalle!: string;
  idApoderado!: Apoderado;
  idAlumno!: Alumno;
  idPeriodo!: Periodo;
  esRepitente!: boolean;
  estado!: string;
  fechaRegistro!: string;
}
