import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ResponseI } from '../interfaces/response.interface';
import { TurismosI } from '../interfaces/turismos.interface';
import { handleError } from '../tools/handle-error';

@Injectable({ providedIn: 'root' })
export class TurismosService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.url;

  getTurismos() {
    const direction = `${this.url}/turismos.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as TurismosI[])
    );
  }
}
