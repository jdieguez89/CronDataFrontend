import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GRAFANA_URL} from '../../app.constants';

@Component({
  selector: 'app-iframe-view',
  templateUrl: './iframe-view.component.html',
  styleUrls: ['./iframe-view.component.scss']
})
export class IframeViewComponent implements OnInit {
  iHeight = window.innerHeight - 65;
  urlIframe = GRAFANA_URL;
  loading = true;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
