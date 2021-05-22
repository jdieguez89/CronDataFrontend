// Angular
import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

export interface ScrollTopOptions {
  offset: number;
  speed: number;
}

/**
 * Scroll to top
 */
@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective implements AfterViewInit {
  // Public properties
  @Input() options!: ScrollTopOptions;
  // Private properties
  private scrollTop: any;

  /**
   * Directive Constructor
   * @param el: ElementRef
   */
  constructor(private el: ElementRef) {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    // @ts-ignore
    this.scrollTop = new KTScrolltop(this.el.nativeElement, this.options);
  }

  /**
   * Returns ScrollTop
   */
  getScrollTop(): any {
    return this.scrollTop;
  }
}
