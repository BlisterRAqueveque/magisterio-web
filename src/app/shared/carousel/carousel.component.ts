import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  images = [
    {
      background: 'url(/assets/img/1.webp)',
      title: 'TEXTO DESCRIPTIVO 1',
      subtitle: 'Subtitulo descriptivo 1',
      link: '',
    },
    {
      background: 'url(/assets/img/2.jpg)',
      title: 'TEXTO DESCRIPTIVO 2',
      subtitle: 'Subtitulo descriptivo 2',
      link: '',
    },
  ];
  url = '';
}
