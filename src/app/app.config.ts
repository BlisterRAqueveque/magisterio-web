import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { DomService } from './shared/image-viewer/backdrop/backdrop.service';

// const scrollConfig: InMemoryScrollingOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes, withInMemoryScrolling(scrollConfig)),
//     provideAnimations(),
//     provideHttpClient(/*withInterceptors([jwtInterceptor])*/),
//   ],
// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(/*withInterceptors([jwtInterceptor])*/),
    DomService,
  ],
};
