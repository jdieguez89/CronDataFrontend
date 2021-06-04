import {RuleMetaTypeEnum} from './enums/rule-meta-type.enum';
import {RuleAlert} from './rule-alert';
import {RuleAnnotationType} from './rule-annotation.type';
import {RuleLabelsType} from './rule-labels.type';

export interface RuleMetadataType {
  name: string;
  query: string;
  type: RuleMetaTypeEnum;
  alerts?: RuleAlert[];
  annotations?: RuleAnnotationType;
  duration?: number;
  labels?: RuleLabelsType;
}
