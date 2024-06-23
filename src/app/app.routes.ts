import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'turismo',
    component: TurismoComponent,
  },
  {
    path: 'contacto',
    component: ContactUsComponent,
  },
];
