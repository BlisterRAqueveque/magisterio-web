import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resoluciones } from '../../interfaces/resoluciones.interface';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'resoluciones',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogComponent],
  templateUrl: './resoluciones.component.html',
  styleUrl: './resoluciones.component.scss',
})
export class ResolucionesComponent {
  resoluciones: Resoluciones[] = [
    {
      id: 1,
      resol: '32/11',
      visto:
        'La inquietud manifestada por una gran cantidad de Delegadas/os y Empleadas/os por solicitar vacaciones en la temporada estival para atender necesidades de índole familiar',
      considerando: [
        'La necesidad de dar algún  reconocimiento ante las solicitudes, sin dejar de atender también, las necesidades de los Sres. Asociados/as',
      ],
      articulo: [
        {
          art: 1,
          desc: 'otorgar vacaciones a las/os Delegadas/os durante el período comprendido entre el 09/01/12 y el 27/11/12  en coincidencia con el Periodo de vacaciones concedido por el C.P.E. a descontar de  los días de la Licencia Anual',
        },
        {
          art: 2,
          desc: 'otorgar vacaciones a los/as Empleados/as de Casa Central y de las  Delegaciones durante  la semana del 09/01 al 27/01 días a descontar  de la Licencia Anual',
        },
        {
          art: 3,
          desc: 'la presente deberá ser incluida en la Memoria Anual',
        },
        {
          art: 4,
          desc: 'la presente queda Ad Referéndum de la Asamblea Ordinaria',
        },
        {
          art: 5,
          desc: 'comuníquese, notifíquese y archívese',
        },
      ],
      lugar: 'Viedma',
      fecha: '30 de noviembre de 2011',
    },
    {
      id: 2,
      resol: '33/11',
      visto:
        'El análisis realizado en reunión de Consejo Directivo de la Mutual sobre el convenio firmado con el IMPS',
      considerando: [
        'Que el monto límite de compra (cupo) es de ½ (equivalente a $600) ',
        'Que este cupo resulta insuficiente para concretar dicho convenio',
        'Que es facultad del CD resolver cuestiones inherentes a la Administración de la entidad establecido en su artículo 23 del estatuto social',
      ],
      articulo: [
        {
          art: 1,
          desc: 'crear un monto límite de compra específico  para turismo con el valor de 1 U/G (equivalente a $1200)',
        },
        {
          art: 2,
          desc: 'este cupo será únicamente para aquellos socios/as q deseen acceder a un contrato de turismo',
        },
        {
          art: 3,
          desc: 'que esta resolución queda ad referendum de la Asamblea Anual',
        },
        {
          art: 4,
          desc: 'que la misma deberá ser incluida en la Memoria Anual',
        },
        {
          art: 5,
          desc: 'notifíquese, Comuníquese y Archivese',
        },
      ],
      lugar: 'Viedma',
      fecha: '30 de noviembre de 2011',
    },
    {
      id: 2,
      resol: '34/11',
      visto:
        'El plan de financiamiento establecido para las compras de Operativo Blanco de la Mutual para el Magisterio Rionegrino establecido en la Resolución Nº 03/10',
      considerando: [
        'Que el monto límite de compra (cupo) es de ½ (equivalente a $600)',
        'Que los valores actualizados de la mercadería en cuestión son considerablemente más elevados',
        'Que es facultad del CD resolver cuestiones inherentes a la Administración de la entidad establecido en su artículo 23 del estatuto social',
      ],
      articulo: [
        {
          art: 1,
          desc: 'dejar sin efecto la Resolución Nº 03/10',
        },
        {
          art: 2,
          desc: 'ampliar los valores correspondientes al plan de pagos en una cuota más, considerando los siguientes montos:\nHasta $150………………….1 cuota\nDe $ 151 hasta  $300……… 2 cuotas\nDe $ 301 hasta  $450……….3 cuotas\nDe $ 451 hasta  $600………..4 cuotas',
        },
        {
          art: 3,
          desc: 'dejar la presente resolución ad referendum de la Asamblea Anual',
        },
        {
          art: 4,
          desc: 'que la misma deberá ser incluida en la Memoria Anual',
        },
        {
          art: 5,
          desc: 'notifíquese, Comuníquese y Archivese',
        },
      ],
      lugar: 'Viedma',
      fecha: '30 de noviembre de 2011',
    },
  ];
}
