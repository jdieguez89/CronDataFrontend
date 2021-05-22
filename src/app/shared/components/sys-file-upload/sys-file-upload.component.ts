import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-utm-file-upload',
  templateUrl: './sys-file-upload.component.html',
  styleUrls: ['./sys-file-upload.component.scss']
})
export class SysFileUploadComponent implements OnInit {
  files: any[] = [];
  file: File | null = null;
  @Input() acceptTypes!: string;
  @Output() fileEmit = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  uploadFile(event: any): void {
    this.file = event.arget.files.item(0);
    this.fileEmit.emit(this.file);
  }

  deleteAttachment(): void {
    this.file = null;
    this.fileEmit.emit(null);
  }

}
