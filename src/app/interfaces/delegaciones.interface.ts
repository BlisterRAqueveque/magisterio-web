export interface DelegacionesI {
  id: number;
  nombre: string;
  delegados: DelegadoI[];
}

interface DelegadoI {
  nombre: string;
  tel: string;
  fax: string;
  domicilio: string;
  horarios: string;
}
