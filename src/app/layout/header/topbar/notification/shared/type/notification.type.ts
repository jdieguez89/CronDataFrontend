import {NotificationSeverityEnum} from '../emun/notification.enum';

export interface NotificationType {
  description: string;
  id: 0;
  name: string;
  readed: string;
  receivedAt: Date;
  severity: NotificationSeverityEnum;
  status: string;
  summary: string
}
