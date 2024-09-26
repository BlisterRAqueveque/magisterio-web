import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { NoticiasI } from '../../interfaces/noticias.interface';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  url = environment.imgURL + 'noticias/';
  private readonly service = inject(NoticiasService);
  private readonly router = inject(Router);

  ngAfterViewInit() {
    this.service.getNoticias().subscribe({
      next: (data) => {
        this.images = data.result;
      },
      error: (e) => console.error(e),
    });
  }
  //swiper: SwiperOptions = {autoplay: 500}
  images: NoticiasI[] = [];

  goNoticia(id: number) {
    this.router.navigate(['noticias'], { queryParams: { id } });
  }
}
