import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunQuickScanBehavior {
  $loadScan = new BehaviorSubject<boolean>(null);

  constructor() {
  }
}
