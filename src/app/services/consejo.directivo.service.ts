import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseI } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { ConsejoDirectivoI } from '../interfaces/consejo.directivo.interface';

@Injectable({ providedIn: 'root' })
export class ConsejoDirectivoService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiURL;

  getConsejo() {
    const direction = `${this.url}consejo-directivo`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map(
        (data) => data.result as { result: ConsejoDirectivoI[]; count: number }
      )
    );
  }
}
