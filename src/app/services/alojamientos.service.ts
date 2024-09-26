import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseI } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { AlojamientosI } from '../interfaces/alojamientos.interface';

@Injectable({ providedIn: 'root' })
export class AlojamientosService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.webURL + 'assets/database';

  getAlojamientos() {
    const direction = `${this.url}/alojamientos.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as AlojamientosI[])
    );
  }
}
