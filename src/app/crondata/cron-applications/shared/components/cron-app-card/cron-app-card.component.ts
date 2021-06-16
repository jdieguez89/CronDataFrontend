import {Component, Input, OnInit} from '@angular/core';
import {ApplicationType} from '../../type/application.type';

@Component({
  selector: 'app-cron-app-card',
  templateUrl: './cron-app-card.component.html',
  styleUrls: ['./cron-app-card.component.scss']
})
export class CronAppCardComponent implements OnInit {
  @Input() app!: ApplicationType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
