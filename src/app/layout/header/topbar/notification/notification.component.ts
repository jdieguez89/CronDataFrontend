import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {SysHttpResponseErrorService} from '../../../../shared/services/sys-http-response-error.service';
import {NotificationSeverityEnum} from './shared/emun/notification.enum';
import {NotificationService} from './shared/service/notification.service';
import {NotificationType} from './shared/type/notification.type';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  // Show dot on top of the icon
  @Input() dot!: string;

  // Show pulse on icon
  @Input() pulse!: boolean;

  @Input() pulseLight!: boolean;

  // Set icon class name
  @Input() icon = 'flaticon2-bell-alarm-symbol';
  @Input() iconType!: '' | 'success';

  // Set true to icon as SVG or false as icon class
  @Input() useSVG!: boolean;

  // Set bg image path
  @Input() bgImage!: string;

  // Set skin color, default to light
  @Input() skin: 'light' | 'dark' = 'light';

  @Input() type: 'brand' | 'success' = 'success';
  notifications: NotificationType[] = [];
  loading = true;
  notificationNumber: string | null = '';
  notificationTypeEnum = NotificationSeverityEnum;
  subscription?: Subscription;
  req = {
    page: 0,
    size: 15,
    sort: 'receivedAt,desc',
  };
  interval: any;

  constructor(private sanitizer: DomSanitizer,
              private notificationService: NotificationService,
              private sysHttpResponseErrorService: SysHttpResponseErrorService) {
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getNotifications();
    }, 20000);
    this.getNotifications();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getNotifications() {
    this.notificationService.query(this.req).subscribe(response => {
      if (response.body) {
        this.notificationNumber = Number(response.headers.get('X-TOTAL-COUNT')) > 20 ? '+20' : response.headers.get('X-TOTAL-COUNT');
        for (const res of response.body) {
          const exist = this.notifications.includes(res);
          if (!exist) {
            this.notifications.push(res);
          }
        }
        this.loading = false;
      }
    });
  }

  backGroundStyle(): string {
    if (!this.bgImage) {
      return 'none';
    }

    return 'url(' + this.bgImage + ')';
  }

  scroll(): void {
    this.req.page += 1;
    this.getNotifications();
  }
}
