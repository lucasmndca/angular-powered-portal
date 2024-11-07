import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateSubject = new BehaviorSubject<{ session: ILoginResponse | null }>({ session: null });
  state$ = this.stateSubject.asObservable();

  constructor() { }

  setState(newState: { session: ILoginResponse | null }) {
    this.stateSubject.next(newState);
  }
}
