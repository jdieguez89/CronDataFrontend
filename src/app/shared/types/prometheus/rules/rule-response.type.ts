import {RuleGroupsType} from './rule-groups.type';

export interface RuleResponseType {
  data: {
    groups: RuleGroupsType[]
  };
  status: string;
}
