import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { JuntaFizcalizacionI } from '../interfaces/junta.fiscalizacion.interface';
import { ResponseI } from '../interfaces/response.interface';
import { handleError } from '../tools/handle-error';

@Injectable({ providedIn: 'root' })
export class JuntaFiscalizacionService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiURL;

  getConsejo() {
    const direction = `${this.url}/junta.fiscalizacion.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as JuntaFizcalizacionI[])
    );
  }
}
