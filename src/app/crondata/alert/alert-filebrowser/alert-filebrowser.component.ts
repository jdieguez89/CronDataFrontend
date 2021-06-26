import {Component, OnDestroy, OnInit} from '@angular/core';
import {FILEBROWSER_URL} from '../../../app.constants';
import {SysToasrtService} from '../../../shared/alert/sys-toasrt.service';
import {PromManagementService} from '../../../shared/services/prometheus/prom-management.service';

@Component({
  selector: 'app-alert-filebrowser',
  templateUrl: './alert-filebrowser.component.html',
  styleUrls: ['./alert-filebrowser.component.scss']
})
export class AlertFilebrowserComponent implements OnInit, OnDestroy {
  iHeight = window.innerHeight - 65;
  urlIframe = FILEBROWSER_URL;

  constructor(private promManagementService: PromManagementService,
              private toastService: SysToasrtService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.promManagementService.reload().subscribe(() => {
      this.toastService.showSuccess('Configuration reloaded');
    });
  }

}
