import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResolucionesI } from '../interfaces/resoluciones.interface';
import { ResponseI } from '../interfaces/response.interface';
import { handleError } from '../tools/handle-error';

@Injectable({ providedIn: 'root' })
export class ResolucionesService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiURL;

  getResoluciones() {
    const direction = `${this.url}resoluciones`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as { result: ResolucionesI[]; count: number })
    );
  }
}
