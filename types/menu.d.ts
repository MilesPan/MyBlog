interface Menu {
  title?: string;
  icon?: string;
  isChecked?: boolean;
  route?: string;
}
export interface IMenu extends Menu {
  children?: Menu[];
}
