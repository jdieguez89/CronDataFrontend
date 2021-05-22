import {NotificationEnum} from '../emun/notification.enum';

export class NotificationType {
  id?: string;
  notifName?: string;
  notifDescription?: string;
  notifType?: NotificationEnum;
  notifStatus?: string;
  notifDate?: string;
  notifUser?: string;
}
