import {DiscoveredLabelsType} from './discovered-labels.type';
import {TargetHealthEnum} from './enums/target-health.enum';
import {TargetLabelsType} from './target-labels.type';

export interface ActiveTargetsType {
  scrapePool: string;
  scrapeUrl: string;
  globalUrl: string;
  lastError: string;
  lastScrape: Date;
  lastScrapeDuration: string;
  health: TargetHealthEnum;
  discoveredLabels: DiscoveredLabelsType;
  labels: TargetLabelsType;
}
