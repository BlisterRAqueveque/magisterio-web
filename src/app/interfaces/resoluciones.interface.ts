export interface Resoluciones {
  id: number;
  resol: string;
  visto: string;
  considerando: string[];
  articulo: Articulos[];
  lugar: string;
  fecha: string;
}

export interface Articulos {
  art: number;
  desc: string;
}
