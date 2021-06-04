import {RuleStateEnum} from './enums/rule-state.enum';
import {RuleAnnotationType} from './rule-annotation.type';
import {RuleLabelsType} from './rule-labels.type';

export interface RuleAlert {
  activeAt: Date;
  annotations: RuleAnnotationType;
  labels: RuleLabelsType;
  state: RuleStateEnum,
  value: 1e+00
}
