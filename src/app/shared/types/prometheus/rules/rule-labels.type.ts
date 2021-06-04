import {RuleLabelSeverityEnum} from './enums/rule-label-severity.enum';

export interface RuleLabelsType {
  alertname: string,
  severity: RuleLabelSeverityEnum
}
