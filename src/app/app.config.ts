import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter
} from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { DialogService } from './shared/confirm-dialog/dialog.service';
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
    DialogService,
  ],
};
