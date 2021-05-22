import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appButtonLoader]'
})
export class ButtonLoaderDirective implements OnChanges {
  @Input() loading = false;
  @Input() typeClass: 'primary' | 'success' | 'danger' | 'info' | 'warning' | 'dark' | 'white' = 'white';
  @Input() classIcon!: string;
  @Input() iconSize = 'icon-md';
  iconNode: any;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  addIcon(): void {
    if (this.classIcon) {
      this.iconNode = this.renderer2.createElement('i');
      this.renderer2.addClass(this.iconNode, this.classIcon);
      this.renderer2.addClass(this.iconNode, 'icon-md');
      this.renderer2.setStyle(this.iconNode, 'float', 'left');
      this.renderer2.setStyle(this.iconNode, 'margin-right', '4px');
      this.renderer2.appendChild(this.el.nativeElement, this.iconNode);
    }
  }

  removeIcon(): void {
    if (this.classIcon) {
      this.renderer2.removeChild(this.el.nativeElement, this.iconNode);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.loading.currentValue) {
        this.removeIcon();
        this.addSpinnerClass();
      } else {
        this.addIcon();
        this.removeSpinnerClass();
      }
    }
  }

  addSpinnerClass(): void {
    this.renderer2.addClass(this.el.nativeElement, 'spinner');
    this.renderer2.addClass(this.el.nativeElement, this.getSpinnerType());
    this.renderer2.addClass(this.el.nativeElement, 'spinner-left');
  }

  removeSpinnerClass(): void {
    this.renderer2.removeClass(this.el.nativeElement, 'spinner');
    this.renderer2.removeClass(this.el.nativeElement, this.getSpinnerType());
    this.renderer2.removeClass(this.el.nativeElement, 'spinner-left');
  }

  getSpinnerType(): any {
    switch (this.typeClass) {
      case 'warning':
        return 'spinner-warning';
      case 'info':
        return 'spinner-info';
      case 'success':
        return 'spinner-success';
      case 'danger':
        return 'spinner-danger';
      case 'dark':
        return 'spinner-dark';
      case 'primary':
        return 'spinner-primary';
      case 'white':
        return 'spinner-white';
      default:
        return 'spinner-white';

    }
  }
}
