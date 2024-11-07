import { Component, inject } from '@angular/core';
import {
  CasaHorarioI,
  CasaMutualI,
} from '../../../interfaces/delegaciones.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CasaMutualService, DelegacionesService } from '../../../services';

@Component({
  selector: 'delegaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delegaciones.component.html',
  styleUrl: './delegaciones.component.scss',
})
export class DelegacionesComponent {
  private readonly service = inject(CasaMutualService);
  private readonly serviceD = inject(DelegacionesService);

  casas_mutuales: CasaMutualI[] = [];

  ngOnInit() {
    this.service.getCasas().subscribe((data) => {
      console.log(data);
      this.casas_mutuales = [...this.casas_mutuales, ...data];
      this.casas_mutuales.sort((a, b) => a.co - b.co);
    });
    this.serviceD.getDelegaciones().subscribe((data) => {
      this.casas_mutuales = [...this.casas_mutuales, ...data.result];
      this.casas_mutuales.sort((a, b) => a.co - b.co);
    });
  }

  printHorarios(horarios: CasaHorarioI[]) {
    if (horarios ? horarios.length > 0 : false)
      return horarios.map((i) => i.horario).join(', ');
    else return 'Sin horarios definidos';
  }
}
