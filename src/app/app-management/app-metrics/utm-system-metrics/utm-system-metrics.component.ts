import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-utm-system-metrics',
  templateUrl: './utm-system-metrics.component.html',
  styleUrls: ['./utm-system-metrics.component.scss']
})
export class UtmSystemMetricsComponent implements OnInit {
  /**
   * object containing thread related metrics
   */
  @Input() systemMetrics!:any;

  /**
   * boolean field saying if the metrics are in the process of being updated
   */
  @Input() updating!: boolean;


  convertMillisecondsToDuration(ms: any): any {
    const times = {
      year: 31557600000,
      month: 2629746000,
      day: 86400000,
      hour: 3600000,
      minute: 60000,
      second: 1000
    };
    let timeString = '';
    for (const key in Object.keys(times)) {
      // @ts-ignore
      if (Math.floor(ms / times[key]) > 0) {
        let plural = '';
        // @ts-ignore
        if (Math.floor(ms / times[key]) > 1) {
          plural = 's';
        }
        // @ts-ignore
        timeString += Math.floor(ms / times[key]).toString() + ' ' + key.toString() + plural + ' ';
        // @ts-ignore
        ms = ms - times[key] * Math.floor(ms / times[key]);
      }
    }
    return timeString;
  }

  ngOnInit(): void {
  }
}
