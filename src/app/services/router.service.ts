import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouterService {
  private readonly index = new BehaviorSubject<number>(1);
  $index = this.index.asObservable();

  setIndex(i: number) {
    this.index.next(i);
  }
}
