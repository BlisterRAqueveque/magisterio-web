import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResolucionesI } from '../../../interfaces/resoluciones.interface';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { ResolucionesService } from '../../../services/resoluciones.service';

@Component({
  selector: 'resoluciones',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogComponent],
  templateUrl: './resoluciones.component.html',
  styleUrl: './resoluciones.component.scss',
})
export class ResolucionesComponent {
  private readonly service = inject(ResolucionesService);

  ngOnInit() {
    this.service.getResoluciones().subscribe((data) => {
      this.resoluciones = data;
    });
  }

  resoluciones: ResolucionesI[] = [];
}
