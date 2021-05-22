import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alerts" role="alert">
      <!--      [ngClass]="setClasses(alert)"-->
      <div *ngFor="let alert of alerts">
        <app-sys-alert [type]="alert.type"
                       *ngIf="alert && alert.type && alert.msg"
                       [alert]="alert.msg"></app-sys-alert>
      </div>
    </div>`,
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: any[] = [];

  // constructor(private alertService: JhiAlertService) {}

  ngOnInit(): void {
    // this.alerts = this.alertService.get();
  }

  // setClasses(alert: JhiAlert): { [key: string]: boolean } {
  //   const classes = { 'jhi-toast': Boolean(alert.toast) };
  //   if (alert.position) {
  //     return { ...classes, [alert.position]: true };
  //   }
  //   return classes;
  // }

  ngOnDestroy(): void {
    // this.alertService.clear();
  }

  // close(alert: JhiAlert): void {
  //   // NOSONAR can be removed after https://github.com/SonarSource/SonarJS/issues/1930 is resolved
  //   alert.close?.(this.alerts); // NOSONAR
  // }
}
