import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GRAFANA_URL, PROMETHEUS_URL} from '../../../app.constants';

@Component({
  selector: 'app-cron-iframe',
  templateUrl: './cron-iframe.component.html',
  styleUrls: ['./cron-iframe.component.scss']
})
export class CronIframeComponent implements OnInit {
  @Input() iHeight!: number;
  @Input() urlIframe!: string;
  loading = true;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    window.addEventListener('resize', (event) => {
      this.iHeight = window.innerHeight - 65;
    });
    // this.activatedRoute.params.subscribe(value => {
    //   this.urlIframe = value.frame === 'grafana' ? GRAFANA_URL : PROMETHEUS_URL;
    // });
    console.log(this.iHeight);
  }
}

