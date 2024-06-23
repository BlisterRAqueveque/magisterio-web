import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroWifiSolid } from '@ng-icons/heroicons/solid';
import { TurismosI } from '../../../interfaces/turismos.interface';
import { TurismosService } from '../../../services/turismos.service';

@Component({
  selector: 't-turismo-section',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ heroWifiSolid })],
  templateUrl: './turismo-section.component.html',
  styleUrl: './turismo-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TurismoSectionComponent {
  @Input('provincias') provincias: TurismosI[] = [];
  selectedProvincia!: TurismosI;

  turismoService = inject(TurismosService);

  ngOnInit() {
    this.turismoService.getTurismos().subscribe((data) => {
      this.provincias = data;
      this.selectedProvincia = this.provincias[0];
    });
  }

  isVisible = true;
  restart() {
    this.isVisible = false;
    setTimeout(() => {
      this.isVisible = true;
    }, 5);
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
