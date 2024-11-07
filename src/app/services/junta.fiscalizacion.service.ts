import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { JuntaFiscalizacionI } from '../interfaces/junta.fiscalizacion.interface';
import { ResponseI } from '../interfaces/response.interface';
import { handleError } from '../tools/handle-error';

@Injectable({ providedIn: 'root' })
export class JuntaFiscalizacionService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiURL;

  getConsejo(params?: HttpParams) {
    const direction = `${this.url}junta-fiscalizaciones`;
    return this.http.get<ResponseI>(direction, { params }).pipe(
      catchError((e) => handleError(e)),
      map(
        (data) =>
          data.result as { result: JuntaFiscalizacionI[]; count: number }
      )
    );
  }
}
