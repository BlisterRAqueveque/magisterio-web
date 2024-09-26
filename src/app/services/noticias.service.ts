import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseI } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { NoticiasI } from '../interfaces/noticias.interface';

@Injectable({ providedIn: 'root' })
export class NoticiasService {
  private readonly http = inject(HttpClient);

  private readonly url = environment.apiURL + 'noticias/';

  getOneNoticia(id: number) {
    const direction = `${this.url}${id}`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as NoticiasI)
    );
  }

  getNoticias() {
    return this.http.get<ResponseI>(this.url).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as { result: NoticiasI[]; count: number })
    );
  }
}
