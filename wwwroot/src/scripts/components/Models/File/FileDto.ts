import { properties } from '../../../utilities/constant';
import { Item } from '../Item';

export class FileDto extends Item {
  extension: string;

  fileName: string;

  parent: number = 0;

  constructor(
    id?: number,
    createDate?: string,
    owner?: string,
    modifiedAt?: string,
    modifiedBy?: string,
    icon?: string,
    extension: string = '.xlxs',
  ) {
    super(id, createDate, owner, modifiedAt, modifiedBy, icon);
    this.extension = extension;
    this.icon = properties.FILE_DEFAULT_URL;
  }

  mapping(input: any) {
    if (input.id) this.id = input.id;
    if (input.fileName) this.fileName = input.fileName;
    if (input.creator) this.owner = input.owner;
    if (input.createAt) this.createAt = input.createAt;
    if (input.modifiedBy) this.modifiedBy = input.modifiedBy;
    if (input.modifiedAt) this.modifiedAt = input.modifiedAt;
    if (input.extension) this.extension = input.extension;
    if (input.icon) this.icon = input.icon;
    if (input.parent) this.parent = input.parent;
    // super.mapping(input);
    // if (input.extension) this.extension = input.extension;
  }
}
