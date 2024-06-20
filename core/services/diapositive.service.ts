import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiapositiveService {
  private diapositiveNumberSubject = new BehaviorSubject<number>(3);
  diapositiveNumber$ = this.diapositiveNumberSubject.asObservable();

  constructor() { }

  nextDiapositive() {
    const currentNumber = this.diapositiveNumberSubject.value;
    this.diapositiveNumberSubject.next(currentNumber + 1);
  }

  prevDiapositive() {
    const currentNumber = this.diapositiveNumberSubject.value;
    this.diapositiveNumberSubject.next(currentNumber - 1);
  }

  setDiapositive(i: any) {
    this.diapositiveNumberSubject.next(i);
  }
}
