import React, { useState } from 'react';

//CSS
import '../../../src/index.scss';
import './style.scss';

//COMPONENTS
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';

//ASSETS
import Home from "../../assets/home.svg";
import BookOpen from "../../assets/book-open.svg";
import Hand from "../../assets/hand-first.svg";
import Briefcase from '../../assets/briefcase.svg';

//CONSTANTS
import { Item } from '../../constants';


function Frame({ children }: any) {
  const [toggleNavBar, setToggleNavBar] = useState<any>(true);

  return (
    <div className='frame'>
      <Navbar
        navToggler={(val: Boolean) => { setToggleNavBar(val) }}
        items={[
          {
            id: 1,
            icon: Home,
            title: 'Overview',
            children: [],
          },
          {
            id: 2,
            icon: Briefcase,
            title: 'Internship',
            children: [{
              id: 21,
              parentId: 2,
              title: 'Design'
            }],
          },
          {
            id: 3,
            icon: BookOpen,
            title: 'Resources',
            children: [],
          },
          {
            id: 4,
            icon: Hand,
            title: 'Community',
            children: [
              {
                id: 41,
                title: 'Design',
                parentId: 4,
              },
              {
                id: 42,
                title: 'Marketing',
                parentId: 2,
              }
            ],
          },
        ]}
        itemClicked={(item: Item) => {
          console.log(item)
        }}
      />

      <Header
        searchText={(val: string) => {
          console.log(val)
        }}
        showSearch={true}
        toggleNav={toggleNavBar}
      />
      

      <div className={toggleNavBar ? 'children' : 'children children-no-nav'}>
        {children}
      </div>
    </div>
  )
}

export default Frame