import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, map } from 'rxjs';
import { NoticiasI } from '../interfaces/noticias.interface';
import { ResponseI } from '../interfaces/response.interface';
import { handleError } from '../tools/handle-error';
import { ResolucionesI } from '../interfaces/resoluciones.interface';

@Injectable({ providedIn: 'root' })
export class ResolucionesService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.url;

  getResoluciones() {
    const direction = `${this.url}/resoluciones.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as ResolucionesI[])
    );
  }
}
