import { Component, inject } from '@angular/core';
import { AlojamientosService } from '../../../services/alojamientos.service';

@Component({
  selector: 't-alojamientos-section',
  standalone: true,
  imports: [],
  templateUrl: './alojamientos-section.component.html',
  styleUrl: './alojamientos-section.component.scss',
})
export class AlojamientosSectionComponent {
  private readonly service = inject(AlojamientosService);

  ngOnInit() {
    this.service.getAlojamientos().subscribe((data) => {
      console.log(data);
    });
  }
}
