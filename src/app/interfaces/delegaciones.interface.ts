export interface Delegaciones {
  id: number;
  nombre: string;
  delegados: Delegado[];
}

interface Delegado {
  nombre: string;
  tel: string;
  fax: string;
  domicilio: string;
  horarios: string;
}
