export interface NavbarProps {
  items: Item[];
  itemClicked : Function
}

export interface Item {
  id: number,
  icon: any,
  title: string,
  children: Children[],
}

export interface Children {
  id : number,
  title : string,
  parentId : number
}