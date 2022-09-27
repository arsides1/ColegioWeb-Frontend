import { GradoSeccion } from "./grado-seccion";
import { Nivel } from "./nivel";

export class NivelDetalle {
  idNivelDetalle!: number;
  idNivel!: Nivel;
  idGradoSeccion!: GradoSeccion;
  totalVacantes!: number;
  totalVacantesDisponibles!: number;
  VacantesOcupadas!: number;
  estado!: boolean;
  fechaRegistro!: string;

}
