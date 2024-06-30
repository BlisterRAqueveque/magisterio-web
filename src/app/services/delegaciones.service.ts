import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ResponseI } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { DelegacionesI } from '../interfaces/delegaciones.interface';

@Injectable({ providedIn: 'root' })
export class DelegacionesService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiURL;

  getDelegaciones() {
    const direction = `${this.url}/delegaciones.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as DelegacionesI[])
    );
  }
}
