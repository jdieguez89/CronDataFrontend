import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sys-spinner',
  templateUrl: './sys-spinner.component.html',
  styleUrls: ['./sys-spinner.component.scss']
})
export class SysSpinnerComponent implements OnInit {
  @Input() width: any;
  @Input() height: any;
  @Input() loading: any;
  @Input() label!: string;
  @Input() color!: string;
  @Input() margin!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
