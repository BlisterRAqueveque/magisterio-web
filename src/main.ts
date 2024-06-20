import { bootstrapApplication } from '@angular/platform-browser';
import { register as registerSwiperElement } from 'swiper/element/bundle';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

registerSwiperElement();
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
