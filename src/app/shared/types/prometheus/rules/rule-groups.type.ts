import {RuleMetaTypeEnum} from './enums/rule-meta-type.enum';

export interface RuleGroupsType {
  rules: RuleMetaTypeEnum[]
  file: string;
  interval: number;
  name: string;
}
