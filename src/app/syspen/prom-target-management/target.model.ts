export interface ITarget {
  id?: number;
  host?: string;
  port?: number;
  job?: string;
  description?: string;
}


export class Target implements ITarget {
  constructor(public host?: string, public port?: number, public id?: number, public job?: string, public description?: string) {
  }
}
