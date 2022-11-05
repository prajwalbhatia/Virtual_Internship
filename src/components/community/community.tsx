import React, { useState } from 'react';

import { PostsProp, ICONS } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Profile from "../../assets/profile.svg";
import GroupName from "../../assets/group-name.svg";

//COMONENTS
import Space from "../space/space";

import { PrimaryButton } from "../button/button";
import PeopleOnline from '../peopleOnline/peopleOnline';

//type - thoughts or post
function Posts({ }: any) {

  return (
    <div className='community'>
      <div className='d-flex community-inner'>
        <div className='community-header'>
          <div className='community-info-row'>
            <div className='group-profile-pic'>
              <img
                className='post-icons'
                src={GroupName}
                alt="profile-icon"
              />
            </div>
            <div className='group-title'>
              Design Community
            </div>
          </div>
          <div className='d-flex d-flex-space-btw member-info-row'>
            <div className='d-flex-a-c member-online'>
              <div className='online-dot'></div>
              <span>312 Online</span>
            </div>
            <div className='d-flex-a-c member-total'>
              <div className='member-dot'></div>
              <span>678 Member</span>
            </div>
          </div>
        </div>

        <div className='horizontal'></div>
        <div className='spaces-container'>
          <div className='space-title'>Thought Bubbles</div>
          <Space />
          <div className='horizontal'></div>
          <Space />
          <div className='horizontal'></div>
          <Space />

        </div>
        <div className='horizontal'></div>

        <div className='people-onine-container'>
          <div className='people-title'>People Online</div>
          <PeopleOnline />
          <PeopleOnline />
          <PeopleOnline />

        </div>
      </div>
    </div>
  )
}

export default Posts;