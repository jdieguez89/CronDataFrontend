export interface IRole {
  name?: string | null;
  nameShow?: string | null;
}

export class Role implements IRole {
  constructor(
    public name?: string | null,
    public nameShow?: string | null) {
    this.name = name ? name.toUpperCase() : null;
    this.nameShow = nameShow ? nameShow.toUpperCase() : null;
  }
}
