import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronDownSolid,
  heroPhoneSolid,
} from '@ng-icons/heroicons/solid';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { SomosComponent } from './somos/somos.component';
import { ActivatedRoute } from '@angular/router';
import { PrincipiosComponent } from './principios/principios.component';
import { DelegacionesComponent } from './delegaciones/delegaciones.component';
import { ResolucionesComponent } from './resoluciones/resoluciones.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIconComponent,
    NavbarComponent,
    CarouselComponent,
    SomosComponent,
    PrincipiosComponent,
    DelegacionesComponent,
    ResolucionesComponent,
    FooterComponent,
  ],
  providers: [provideIcons({ heroChevronDownSolid, heroPhoneSolid })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.fragment.subscribe((data) => {
      if (data) this.jumpSection(data);
    });
  }

  jumpSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
