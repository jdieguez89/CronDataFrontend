import {RuleMetaTypeEnum} from './enums/rule-meta-type.enum';
import {RuleAlert} from './rule-alert';

export interface RuleGroupsType {
  rules: RuleAlert[];
  file: string;
  interval: number;
  name: string;
}
