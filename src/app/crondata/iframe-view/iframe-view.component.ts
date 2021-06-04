import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GRAFANA_URL, PROMETHEUS_URL} from '../../app.constants';

@Component({
  selector: 'app-iframe-view',
  templateUrl: './iframe-view.component.html',
  styleUrls: ['./iframe-view.component.scss']
})
export class IframeViewComponent implements OnInit {
  iHeight = window.innerHeight - 65;
  urlIframe = 'http://localhost:9090/';
  loading = true;

  constructor(private activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    window.addEventListener('resize', (event) => {
      this.iHeight = window.innerHeight - 65;
    });
    this.activatedRoute.params.subscribe(value => {
      this.urlIframe = value.frame === 'grafana' ? GRAFANA_URL : PROMETHEUS_URL;
    });
    console.log(this.iHeight);
  }
}
