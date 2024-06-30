import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Loading {
  private readonly loading = new BehaviorSubject<boolean>(false);
  readonly $loading = this.loading.asObservable();

  isLoading(condition: boolean) {
    this.loading.next(condition);
  }
}
