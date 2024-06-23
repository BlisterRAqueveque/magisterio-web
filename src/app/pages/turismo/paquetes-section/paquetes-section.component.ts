import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { PaquetesTourService } from '../../../services/paquetes.turisticos.service';
import { PaquetesTourI } from '../../../interfaces/paquetes.tour.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-paquetes-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paquetes-section.component.html',
  styleUrl: './paquetes-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaquetesSectionComponent {
  private readonly service = inject(PaquetesTourService);

  paquetes: PaquetesTourI[] = [];
  selectedPaquete!: PaquetesTourI;

  ngOnInit(): void {
    this.service.getPaquetes().subscribe((data) => {
      this.paquetes = data;
      this.selectedPaquete = this.paquetes[0];
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const el = event.target as HTMLElement;
    if (el.id === 'provincia') {
      const elements = document.querySelectorAll('.active');
      elements.forEach((e) => {
        e.classList.remove('active');
      });
      el.classList.add('active');
    }
  }
}
