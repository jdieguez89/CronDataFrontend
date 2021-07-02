import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HealthDetails, HealthKey} from '../health-checks.service';

@Component({
  selector: 'app-health-detail',
  templateUrl: './health-detail.component.html',
  styleUrls: ['./health-detail.component.scss']
})
export class HealthDetailComponent implements OnInit {
  @Input() health?: { key: HealthKey; value: HealthDetails };

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    console.log(this.health);
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

  getDiskSpaceByKey(key: string): number {
    if (this.health) {
      return (this.health.value.details[key] / 1073741824);
    } else {
      return 0;
    }
  }


  getProgressValue(): number {
    return (100 * this.getDiskSpaceByKey('free')) / this.getDiskSpaceByKey('total');
  }

  /**
   * Return type of progress "success", "info", "warning", "danger"
   */
  getColorLine(): string {
    const value = this.getProgressValue();
    if (value <= 50) {
      return 'success';
    } else if (value > 50 && value <= 75) {
      return 'primary';
    } else if (value > 70 && value <= 85) {
      return 'warning';
    } else if (value > 85) {
      return 'danger';
    } else {
      return 'dark';
    }
  }
}
