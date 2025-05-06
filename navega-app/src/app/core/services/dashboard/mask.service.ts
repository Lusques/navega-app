import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaskService {
  private maskState = new BehaviorSubject<boolean>(false);
  maskState$ = this.maskState.asObservable();

  togleMask() {
    this.maskState.next(!this.maskState.value);
    console.log(this.maskState.value)
  }
}
