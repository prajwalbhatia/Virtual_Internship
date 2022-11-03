export interface NavbarProps {
  items: Item[];
  itemClicked : Function
}

export interface HeaderProp {
    searchText : Function,
    showSearch : boolean
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