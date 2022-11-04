export interface NavbarProps {
  items: Item[];
  itemClicked: Function
}

export interface HeaderProp {
  searchText: Function,
  showSearch: boolean
}

export interface PostsProp {
  postText: Function,
  btnAction : Function
}

export interface Item {
  id: number,
  icon: any,
  title: string,
  children: Children[],
}

export interface Children {
  id: number,
  title: string,
  parentId: number
}

export const ICONS = {
  addIcon: 'add-icon',
  videoIcon : 'video-icon',
  micIcon : 'mic-icon',
  post : 'post'
}