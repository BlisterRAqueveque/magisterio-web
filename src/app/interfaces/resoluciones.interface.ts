export interface ResolucionesI {
  id: number;
  resol: string;
  visto: string;
  consideraciones: ConsideracionI[];
  articulos: ArticulosI[];
  lugar: string;
  fecha: string;
}

export interface ArticulosI {
  art: number;
  desc: string;
}

export interface ConsideracionI {
  id: number;
  consideracion: string;
}
