export interface ResolucionesI {
  id: number;
  resol: string;
  visto: string;
  considerando: string[];
  articulo: ArticulosI[];
  lugar: string;
  fecha: string;
}

export interface ArticulosI {
  art: number;
  desc: string;
}
