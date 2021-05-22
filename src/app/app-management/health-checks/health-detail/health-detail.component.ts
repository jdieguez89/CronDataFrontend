import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HealthDetails, HealthKey} from '../health-checks.service';

@Component({
  selector: 'app-health-detail',
  templateUrl: './health-detail.component.html',
  styleUrls: ['./health-detail.component.scss']
})
export class HealthDetailComponent {
  health?: { key: HealthKey; value: HealthDetails };

  constructor(public activeModal: NgbActiveModal) {
  }

  readableValue(value: any): string {
    if (this.health && this.health.key === 'diskSpace') {
      // Should display storage space in an human readable unit
      const val = value / 1073741824;
      if (val > 1) {
        // Value
        return val.toFixed(2) + ' GB';
      } else {
        return (value / 1048576).toFixed(2) + ' MB';
      }
    }

    if (typeof value === 'object') {
      return JSON.stringify(value);
    } else {
      return value.toString();
    }
  }
}
