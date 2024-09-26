export interface CasaMutualI {
  id: number;
  co: number;
  nombre: string;
  direccion: string;
  tel: string;
  cel: string;
  correo: string;
  cp: number;
  fecha_creado: Date;
  activo: boolean;

  borrado_el: Date;

  //creado_por: UsuarioI;

  //usuarios: UsuarioI[];

  //habitaciones: HabitacionI[];

  //parcelas: ParcelaI[];

  //horarios: HorarioI;

  //ediciones: EdicionI[];

  casa_horarios: CasaHorarioI[];
}

export interface CasaHorarioI {
  id: number;
  horario: string;
}
