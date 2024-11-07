import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs';
import { handleError } from '../tools/handle-error';
import { ContactUsMail, ResponseI } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class MailService {
  private readonly http = inject(HttpClient);

  private readonly url = environment.apiURL;

  sendMail(data: ContactUsMail) {
    const direction = this.url + 'contact-us';
    return this.http.post<ResponseI>(direction, data).pipe(
      catchError((e) => handleError(e)),
      map((data) => data.ok)
    );
  }
}
