import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpgradePlanBehavior {
  $upgraded = new BehaviorSubject<string>(null);

  constructor() {
  }
}
