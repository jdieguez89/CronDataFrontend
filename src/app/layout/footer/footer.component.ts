// Angular
import {Component, OnInit} from '@angular/core';

// Object-Path

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  // Public properties
  today: number = Date.now();
  footerClasses = '';
  footerContainerClasses = '';

  /**
   * Component constructor
   *
   * @param uiClasses: HtmlClassService
   */
  constructor() {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
  }
}
