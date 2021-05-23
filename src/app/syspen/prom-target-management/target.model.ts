export interface ITarget {
  id?: number;
  targetHost?: string;
  port?: number;
  job?: string;
  zone?: string;
}


export class Target implements ITarget {
  constructor(public targetHost?: string, public port?: number, public id?: number, public job?: string, public zone?: string) {
  }
}
