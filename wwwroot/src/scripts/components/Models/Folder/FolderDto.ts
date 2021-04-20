import { properties } from '../../../utilities/constant';
import { Item } from '../Item';

export class FolderDto extends Item {
  folderName: string;

  parentID: number = 0;

  constructor(
    id?: number,
    createDate?: string,
    creator?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
  ) {
    super(id, createDate, creator, modifiedAt, modifiedBy, icon);
    this.icon = properties.FOLDER_DEFAULT_URL;
  }

  mapping(input: any) {
    if (input.id) this.id = input.id;
    if (input.folderName) this.folderName = input.folderName;
    if (input.owner) this.owner = input.owner;
    if (input.createAt) this.createAt = input.createAt;
    if (input.modifiedBy) this.modifiedBy = input.modifiedBy;
    if (input.modifiedAt) this.modifiedAt = input.modifiedAt;
    if (input.icon) this.icon = input.icon;
    // super.mapping(input);
    // if (input.subItems) this.subItems = input.subItems;
  }
}
