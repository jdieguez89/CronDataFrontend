import {Component, OnInit} from '@angular/core';
import {PromQueryRulesService} from '../../../shared/services/prometheus/prom-query-rules.service';
import {RuleResponseType} from '../../../shared/types/prometheus/rules/rule-response.type';

@Component({
  selector: 'app-alert-manager',
  templateUrl: './alert-manager.component.html',
  styleUrls: ['./alert-manager.component.scss']
})
export class AlertManagerComponent implements OnInit {
  rules!: RuleResponseType;

  constructor(private promQueryRulesService: PromQueryRulesService) {
  }

  ngOnInit() {
    this.getRules();
  }

  getRules() {
    this.promQueryRulesService.query().subscribe(response => {
      if (response.body) {
        this.rules = response.body;
        console.log(this.rules);
      }
    });
  }
}
