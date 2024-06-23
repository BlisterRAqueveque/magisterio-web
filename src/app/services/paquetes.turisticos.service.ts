import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ResponseI } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { PaquetesTourI } from '../interfaces/paquetes.tour.interface';

@Injectable({ providedIn: 'root' })
export class PaquetesTourService {
  private readonly http = inject(HttpClient);

  private readonly url = environment.apiURL;

  getPaquetes() {
    const direction = `${this.url}/paquetes.tour.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as PaquetesTourI[])
    );
  }
}
