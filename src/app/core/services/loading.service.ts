import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private count: number;
  private loadingSub$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.count = 0;
  }

  getObservable(): Observable<boolean> {
    return this.loadingSub$.asObservable();
  }

  hide(): void {
    this.count--;

    if (this.count == 0) {
      this.loadingSub$.next(false);
    }
  }

  reset(): void {
    this.count = 0;
    this.loadingSub$.next(false);
  }

  show(): void {
    this.count++;

    if (this.count > 0) {
      this.loadingSub$.next(true);
    }
  }
}
