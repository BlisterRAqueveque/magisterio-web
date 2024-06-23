import { AdjuntosI } from './adjuntos.interface';

export interface PaquetesTourI {
  lugar: string;
  paquete: string;
  adjuntos: AdjuntosI[];
}
