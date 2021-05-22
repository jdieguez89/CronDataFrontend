import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sys-alert',
  templateUrl: './sys-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SysAlertComponent implements OnInit {
  @Input() alert!: string;
  @Input() type!: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark';
  noClosed = true;

  constructor(alertConfig: NgbAlertConfig) {
  }

  ngOnInit(): void {
  }

  closeAlert(alert: IAlert): void {
  }

  reset(): void {
    // this.alerts = this.backup.map((alert: IAlert) =>
    // 	Object.assign({}, alert)
    // );
  }

  changeSuccessMessage(): void {
  }

  resolveIconByType(): string {
    switch (this.type) {
      case 'danger':
        return 'assets/media/svg/icons/Code/Warning-1-circle.svg';
      case 'success':
        return 'assets/media/svg/icons/Navigation/Check.svg';
      case 'info':
        return 'assets/media/svg/icons/Code/Info-circle.svg';
      case 'warning':
        return 'assets/media/svg/icons/Code/Warning-1-circle.svg';
      default:
        return '';
    }
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
