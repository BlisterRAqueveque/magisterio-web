import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ResponseI } from '../interfaces/response.interface';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { NoticiasI } from '../interfaces/noticias.interface';

@Injectable({ providedIn: 'root' })
export class NoticiasService {
  private readonly http = inject(HttpClient);

  private readonly url = environment.url;

  getOneNoticia(id: number) {
    const direction = `${this.url}/noticias.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => {
        const noticias = data.result as NoticiasI[];
        if (noticias.length > 0) {
          const noticia = noticias.find((n) => n.id === id);
          return noticia;
        } else {
          return null;
        }
      })
    );
  }

  getNoticias() {
    const direction = `${this.url}/noticias.json`;
    return this.http.get<ResponseI>(direction).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.result as NoticiasI[])
    );
  }
}
