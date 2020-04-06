import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibleService {
  constructor() {}
  // tslint:disable-next-line:variable-name
  public isVisibleStatus = new Subject();

  setIsVisible(value: boolean) {
    this.isVisibleStatus.next(value);
  }
}
