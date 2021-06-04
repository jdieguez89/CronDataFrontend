import {Component, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
import {PromQueryRulesService} from '../../../shared/services/prometheus/prom-query-rules.service';
import {RuleStateEnum} from '../../../shared/types/prometheus/rules/enums/rule-state.enum';
import {RuleAlert} from '../../../shared/types/prometheus/rules/rule-alert';
import {RuleGroupsType} from '../../../shared/types/prometheus/rules/rule-groups.type';

@Component({
  selector: 'app-alert-manager',
  templateUrl: './alert-manager.component.html',
  styleUrls: ['./alert-manager.component.scss']
})
export class AlertManagerComponent implements OnInit, OnDestroy {
  groups!: RuleGroupsType[];
  ruleStateEnum = RuleStateEnum;
  interval: any;

  constructor(private promQueryRulesService: PromQueryRulesService) {
  }

  ngOnInit() {
    this.getRules();
    this.interval = setInterval(() => this.getRules(), 10000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getRules() {
    this.promQueryRulesService.query().subscribe(response => {
      if (response.body) {
        this.groups = response.body.data.groups;
        console.log(this.groups);
      }
    });
  }

  openEditor() {

  }

  buildRule(rule: RuleAlert) {
    return '<strong>alert:</strong><a class="ml-4">' + rule.name + '</a><br>' +
      '<strong>expr:</strong><a\n' +
      '      class="ml-4">' + rule.query + '</a><br>\n' +
      '      <div><strong>for:</strong> ' + (rule.duration / 60) + ' minutes</div>\n' +
      '      <div><strong>labels:</strong>\n' +
      '        <div class="ml-4">severity: ' + rule.labels.severity + '</div>\n' +
      '      </div>\n' +
      '      <div><strong>annotations:</strong>\n' +
      '        <div class="ml-4">description: ' + rule.annotations.description +
      '        </div>\n' +
      '        <div class="ml-4">summary: ' + rule.annotations.summary + '</div>\n' +
      '      </div>';
  }

  calcEvaluation(lastEvaluation: Date): string {
    return moment(new Date()).diff(moment(lastEvaluation), 'seconds') + ' seconds';
  }
}
