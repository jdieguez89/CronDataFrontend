// Angular
import {Component} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  searchDisplay = true;
  notificationsDisplay = true;
  quickActionsDisplay = true;
  cartDisplay = true;
  quickPanelDisplay = true;
  languagesDisplay = true;
  userDisplay = true;
  userLayout = 'dropdown';
  userDropdownStyle = 'dark';

  constructor() {
  }
}
