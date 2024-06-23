import { AdjuntosI } from "./adjuntos.interface";

export interface TurismosI {
  provincia: string;
  lugares: LugaresI[];
}

export interface LugaresI {
  lugar: string;
  ubicacion: string;
  otros: string;
  descripcion: string;
  link: string;
  contacto: string;
  servicios: ServiciosI[];
  adjuntos: AdjuntosI[];
}

export interface ServiciosI {
  icon: string;
  servicio: string;
}


