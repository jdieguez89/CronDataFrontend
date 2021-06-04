import {ActiveTargetsType} from './active-targets.type';
import {DiscoveredLabelsType} from './discovered-labels.type';

export interface TargetsResponseType {
  status: string;
  data: {
    activeTargets: ActiveTargetsType[],
    droppedTargets: DiscoveredLabelsType[]
  }
}
