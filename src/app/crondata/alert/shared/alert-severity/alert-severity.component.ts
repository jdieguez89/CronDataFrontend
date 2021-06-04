import {Component, Input, OnInit} from '@angular/core';
import {NotificationSeverityEnum} from '../../../../layout/header/topbar/notification/shared/emun/notification.enum';

@Component({
  selector: 'app-alert-severity',
  templateUrl: './alert-severity.component.html',
  styleUrls: ['./alert-severity.component.scss']
})
export class AlertSeverityComponent implements OnInit {
  @Input() severity!: NotificationSeverityEnum;
  notificationTypeEnum = NotificationSeverityEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
