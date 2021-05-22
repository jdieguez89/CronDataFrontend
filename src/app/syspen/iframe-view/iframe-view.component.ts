import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GRAFANA_URL, PROMETHEUS_URL} from '../../app.constants';

@Component({
  selector: 'app-iframe-view',
  templateUrl: './iframe-view.component.html',
  styleUrls: ['./iframe-view.component.scss']
})
export class IframeViewComponent implements OnInit {
  iHeight = window.innerHeight - 60;
  // urlIframe = 'http://127.0.0.1:3000/goto/ygYztmqGk'
  urlIframe = 'http://localhost:9090/';
  loading = true;

  constructor(private activatedRoute: ActivatedRoute) {
    window.addEventListener('resize', (event) => {
      this.iHeight = window.innerHeight - 60;
    });
    this.activatedRoute.params.subscribe(value => {
      this.urlIframe = value.frame === 'grafana' ? GRAFANA_URL : PROMETHEUS_URL;
    });

  }

  ngOnInit(): void {
  }

}
