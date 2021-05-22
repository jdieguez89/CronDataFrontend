import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sys-toggle',
  templateUrl: './sys-toggle.component.html',
  styleUrls: ['./sys-toggle.component.scss']
})
export class SysToggleComponent implements OnInit {
  @Input() active!: boolean;
  @Input() label!: string;
  @Input() emitAtStart!: boolean;
  @Output() toggleChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.active) {
      this.active = false;
    }
    if (this.emitAtStart === true) {
      this.toggleChange.emit(this.active);
    }
  }

  toggle(): void {
    this.active = this.active ? false : true;
    this.toggleChange.emit(this.active);
  }
}
