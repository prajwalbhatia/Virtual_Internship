import React, { useState } from 'react';

import { HeaderProp } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Search from "../../assets/search.svg";
import Profile from "../../assets/profile.svg";
import Notification from "../../assets/notification.svg";
import Chat from "../../assets/chat.svg";
import Bookmark from "../../assets/bookmark.svg"
import LR from "../../assets/LR.svg";

function Header({ searchText, showSearch, toggleNav }: HeaderProp) {
  const [searchTextVal, setSearchTextVal] = useState('');

  const handleSearchText = (e: any) => {
    setSearchTextVal(e.target.value);
    searchText(e.target.value);
  }

  return (
    <div className={toggleNav ? 'd-flex-a-c header' : 'd-flex-a-c header-no-nav'}>
      <div className='header-row'>

        <div className='d-flex header-left-part'>
          {
            showSearch
            &&
            <>
              <img src={Search} alt="search-icon" />
              <input
                className="header-search"
                type="text"
                value={searchTextVal}
                onChange={handleSearchText}
                placeholder='Search any topic or anyone in the community'
              />
            </>
          }
        </div>


        <div className='header-right-part'>
          <img className='icons-header' src={LR} alt="profile-icon" />
          <img className='icons-header' src={Chat} alt="profile-icon" />
          <img className='icons-header' src={Bookmark} alt="profile-icon" />
          <div className='d-flex-c pos-rel'>
            <div className='notification-container'>
              4
            </div>
            <img className='icons-header' src={Notification} alt="profile-icon" />
          </div>
          <div className='d-flex-c profile-container'>
            <img src={Profile} alt="profile-icon" />
          </div>


        </div>

      </div>
    </div>
  )
}

export default Header;