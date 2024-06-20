import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-turismo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './turismo.component.html',
  styleUrl: './turismo.component.scss',
})
export class TurismoComponent {
  route = inject(ActivatedRoute);
  routerService = inject(RouterService);
  async ngAfterViewInit() {
    this.routerService.$index.subscribe((i) => {
      setTimeout(() => {
        this.active(i.toString());
      }, 50);
    });
    // this.route.fragment.subscribe((index) => {
    //   setTimeout(() => {
    //     this.active(index ?? '1');
    //   }, 50);
    // });
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
        d.classList.add('text-gray-500');
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
      indexDiv?.classList.remove('text-gray-500');

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
