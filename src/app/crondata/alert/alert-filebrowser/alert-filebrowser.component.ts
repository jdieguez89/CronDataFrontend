import {Component, OnInit} from '@angular/core';
import {FILEBROWSER_URL} from '../../../app.constants';

@Component({
  selector: 'app-alert-filebrowser',
  templateUrl: './alert-filebrowser.component.html',
  styleUrls: ['./alert-filebrowser.component.scss']
})
export class AlertFilebrowserComponent implements OnInit {
  iHeight = window.innerHeight - 65;
  urlIframe = FILEBROWSER_URL;

  constructor() {
  }

  ngOnInit(): void {
  }

}
