import { Component } from '@angular/core';
import { Delegaciones } from '../../../interfaces/delegaciones.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'delegaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delegaciones.component.html',
  styleUrl: './delegaciones.component.scss',
})
export class DelegacionesComponent {
  delegaciones: Delegaciones[] = [
    {
      id: 2,
      nombre: 'CATRIEL',
      delegados: [
        {
          nombre: 'CARRASCO, Griselda',
          tel: '299 491 3358',
          fax: '4912000',
          domicilio: 'Formosa 572',
          horarios: 'Lunes 18:00 a 21:00',
        },
        {
          nombre: 'PEREYRA, Jorge H.',
          tel: '',
          fax: '02920 15247015',
          domicilio: '',
          horarios: 'Martes a viernes 09:00 a 12:00',
        },
      ],
    },
    {
      id: 3,
      nombre: 'CINCO SALTOS',
      delegados: [
        {
          nombre: 'WENDT, Eleonora',
          tel: '299 498 2270',
          fax: '4981197',
          domicilio: 'Don Bosco 121',
          horarios: 'Lunes, martes, miércoles y viernes 08:30 a 12:30',
        },
        {
          nombre: 'GUTIERREZ, Maria I.',
          tel: '',
          fax: '',
          domicilio: '',
          horarios: 'Jueves 15:00 a 19:00',
        },
      ],
    },
  ];
}
