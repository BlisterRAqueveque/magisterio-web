import { Component, inject } from '@angular/core';
import { AlojamientosService } from '../../../services/alojamientos.service';
import { AlojamientosI } from '../../../interfaces/alojamientos.interface';
import { ImageViewerComponent } from '../../../shared/image-viewer/image-viewer.component';

@Component({
  selector: 't-alojamientos-section',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './alojamientos-section.component.html',
  styleUrl: './alojamientos-section.component.scss',
})
export class AlojamientosSectionComponent {
  private readonly service = inject(AlojamientosService);

  alojamientos: AlojamientosI[] = [];

  ngOnInit() {
    this.service.getAlojamientos().subscribe((data) => {
      this.alojamientos = data;
    });
  }
}
