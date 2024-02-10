import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  get isLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

  setLoading(loading: boolean): void {
    this.isLoadingSubject.next(loading);
  }
}
