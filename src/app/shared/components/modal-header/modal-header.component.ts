import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {
  @Input() name!: string;
  @Input() type!: 'delete' | 'normal';
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
