import { properties } from '../../utilities/constant';

export class Item {
  id: number;

  createAt: string = '04/04/2021';

  owner: string = 'An Tran Hoang';

  modifiedAt: string;

  modifiedBy: string;

  icon: string;

  constructor(
    id?: number,
    createDate?: string,
    creator?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
  ) {
    if (id) this.id = id;
    if (createDate) this.createAt = createDate;
    if (creator) this.owner = creator;
    if (modifiedAt) this.modifiedAt = modifiedAt;
    if (modifiedBy) this.modifiedBy = modifiedBy;
    if (icon) this.icon = icon;
  }
}
