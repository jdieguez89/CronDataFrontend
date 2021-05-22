export interface ITarget {
  id?: number;
  targetHost?: string;
  job?: string;
  zone?: string;
}


export class Target implements ITarget {
  constructor(public id?: number, public targetHost?: string, public job?: string,public zone?: string) {}
}
