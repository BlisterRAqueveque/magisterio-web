import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TurismosI } from '../../interfaces/turismos.interface';
import { RouterService } from '../../services/router.service';
import { TurismosService } from '../../services/turismos.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroWifiSolid } from '@ng-icons/heroicons/solid';
import { TurismoSectionComponent } from './turismo-section/turismo-section.component';
import { PaquetesSectionComponent } from './paquetes-section/paquetes-section.component';
import { AlojamientosSectionComponent } from './alojamientos-section/alojamientos-section.component';

@Component({
  selector: 'app-turismo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    TurismoSectionComponent,
    PaquetesSectionComponent,
    AlojamientosSectionComponent,
  ],
  providers: [provideIcons({ heroWifiSolid })],
  templateUrl: './turismo.component.html',
  styleUrl: './turismo.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TurismoComponent {
  route = inject(ActivatedRoute);
  routerService = inject(RouterService);
  turismoService = inject(TurismosService);

  async ngAfterViewInit() {
    this.routerService.$index.subscribe((i) => {
      setTimeout(() => {
        this.active(i.toString());
      }, 50);
    });
  }

  active(index: string) {
    //! Obtenemos el div seleccionado
    const indexDiv = document.getElementById(index);
    const navigateDiv = document.getElementById('select');
    if (navigateDiv) {
      //* Traemos todos los div para eliminar el texto negro
      const divs = document.querySelectorAll('.selectable');
      divs.forEach((d) => {
        d.classList.remove('text-black');
        d.classList.add('text-mag-500');
      });

      //! Obtenemos el width y el height
      const w = indexDiv?.offsetWidth;
      const h = indexDiv?.offsetHeight;
      //! Y se lo colocamos al div navegador:
      navigateDiv.style.width = `${w}px`;
      navigateDiv.style.height = `${h}px`;
      //! Obtenemos la posición
      const indexRect = indexDiv?.getBoundingClientRect();
      const p = {
        x: indexRect?.left! + window.scrollX,
        y: indexRect?.top! + window.scrollY,
      };
      //! Y lo trasladamos
      navigateDiv.style.transform = `translate(${p.x}px, ${p.y}px)`;

      //? Para que al inicio no se vea la animación, le damos un time out
      setTimeout(() => {
        navigateDiv.classList.add('transition-all');
        navigateDiv.classList.add('duration-100');
      }, 100);

      //! Agregamos los estilos al texto:
      indexDiv?.classList.add('text-black');
      indexDiv?.classList.remove('text-mag-500');

      // Y rotamos la card para que no se vea la transición al romperse los contenedores
      const card = document.getElementById('card');
      card?.classList.toggle('rotate');
      //! Cambiamos los contenedores activos:
      this.setActive(indexDiv ? +indexDiv.id : 1);
    }
  }

  sectionActive = 1;
  setActive(id: number) {
    this.sectionActive = id;
  }
}
