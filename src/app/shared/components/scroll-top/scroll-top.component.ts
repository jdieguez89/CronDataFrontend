// Angular
import {Component} from '@angular/core';
import {ScrollTopOptions} from '../../directives/scroll-top.directive';

// Layout


@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
})
export class ScrollTopComponent {
  // Public properties
  scrollTopOptions: ScrollTopOptions = {
    offset: 300,
    speed: 600
  };
}
