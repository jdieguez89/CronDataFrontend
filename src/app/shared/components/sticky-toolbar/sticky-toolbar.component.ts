// Angular
import {Component} from '@angular/core';
import {OffcanvasOptions} from '../../directives/offcanvas.directive';

// Layout

@Component({
  selector: 'app-sticky-toolbar',
  templateUrl: './sticky-toolbar.component.html',
  styleUrls: ['./sticky-toolbar.component.scss'],
})
export class StickyToolbarComponent {
  // Public properties
  demoPanelOptions: OffcanvasOptions = {
    overlay: true,
    baseClass: 'offcanvas',
    placement: 'right',
    closeBy: 'kt_demo_panel_close',
    toggleBy: 'kt_demo_panel_toggle'
  };

  baseHref: string;

  constructor() {
    this.baseHref = 'https://keenthemes.com/metronic/preview/angular/';
  }
}
