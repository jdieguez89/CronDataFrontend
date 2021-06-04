import {RuleStateEnum} from './enums/rule-state.enum';
import {RuleAnnotationType} from './rule-annotation.type';
import {RuleLabelsType} from './rule-labels.type';

export interface RuleAlert {
  activeAt: Date;
  annotations: RuleAnnotationType;
  labels: RuleLabelsType;
  state: RuleStateEnum;
  value: any;
  name: string;
  query: string;
  duration: number;
  health: string;
  evaluationTime: number;
  lastEvaluation: Date;
  type: string;
}
