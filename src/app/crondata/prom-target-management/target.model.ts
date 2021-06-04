import {TargetHealthEnum} from '../../shared/types/prometheus/targets/enums/target-health.enum';

export interface ITarget {
  id?: number;
  host?: string;
  port?: number;
  job?: string;
  description?: string;
  health?: TargetHealthEnum;
  lastError?: string
}


export class Target implements ITarget {
  constructor(public host?: string,
              public port?: number,
              public id?: number,
              public job?: string,
              public description?: string,
              public health?: TargetHealthEnum,
              public lastError?: string) {
  }
}
