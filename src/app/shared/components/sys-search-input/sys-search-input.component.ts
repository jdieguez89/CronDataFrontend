import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sys-search-input',
  templateUrl: './sys-search-input.component.html',
  styleUrls: ['./sys-search-input.component.scss']
})
export class SysSearchInputComponent implements OnInit {
  @Input() searching = false;
  @Input() placeholder: any;
  @Output() searchFor = new EventEmitter<string>();
  @ViewChild('searcherInput') searcherInput!: ElementRef;
  typing!: boolean;
  valueSearch!: string;
  private timer: any;

  constructor() {
  }

  ngOnInit(): void {
  }


  search($event: any): void {
    this.typing = true;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.searchFor.emit($event.target.value);
      this.typing = false;
    }, 2000);
  }
}
