import { AdjuntosI } from './adjuntos.interface';

export interface AlojamientosI {
  localidad: string;
  direccion: string;
  horarios: string[];
  telefonos: string[];
  adjuntos: AdjuntosI[];
}
