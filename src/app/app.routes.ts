import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SerSocioComponent } from './pages/ser-socio/ser-socio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'M.M. | Bienvenido',
    component: HomeComponent,
  },
  {
    path: 'noticias',
    title: 'M.M. | Noticias',
    component: NoticiasComponent,
  },
  {
    path: 'turismo',
    title: 'M.M. | Turismo',
    component: TurismoComponent,
  },
  {
    path: 'contacto',
    title: 'M.M. | Contáctenos',
    component: ContactUsComponent,
  },
  {
    path: 'socios',
    title: 'Quiero ser socio',
    component: SerSocioComponent,
  },
];
