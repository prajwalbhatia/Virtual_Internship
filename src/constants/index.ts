export interface NavbarProps {
  items: Item[];
  itemClicked: Function;
  navToggler : Function
}

export interface HeaderProp {
  searchText: Function,
  showSearch: boolean,
  toggleNav : boolean
}

export interface PeopleOnlineProp {
  name : string,
  flag : any,
  desigination : string,
  userImage : any
}

export interface SpaceProps {
  tags : Tag[],
  topic : string
}

export interface PostsProp {
  postText: Function,
  btnAction : Function
  type : string
}

export interface Item {
  id: number,
  icon: any,
  title: string,
  children: Children[],
}

export interface Tag {
  id: number,
  tag : string
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