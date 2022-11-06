import React, { useState } from 'react';

import { PeopleOnlineProp, PostsProp } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Bookmark from "../../assets/bookmark-post.svg";
import UserDp from "../../assets/master.svg";
import Flag from "../../assets/flag.svg";
import Chat from "../../assets/comment.svg";
import Chatting from "../../assets/chatting.svg";

//COMPONENTS
import Posts from '../posts/posts';
import Comment from '../comment/comment';

// { postText, btnAction }: PostsProp
function PeopleOnline({name , flag , desigination , userImage }: PeopleOnlineProp) {

  return (
    <div className='people-online'>
      <div className='people-online-inner'>
        <div className='d-flex-space-btw post-user-detail-container'>
          <div className='d-flex'>
            <div className='d-flex-c profile-container'>
              <img src={userImage} alt="user-icon" />
            </div>
            <div className='user-info-container'>
              <div className='top'>
                <div className='flag'>
                  <img src={flag} alt="flag-icon" />
                </div>
                <span className='username'>{name}</span>
              </div>
              <div className='bottom'>
                <span className='desigination'>{desigination}</span>
              </div>
            </div>
          </div>
          <div className='chatting-container'>
            <img src={Chatting} alt="chatting-icon" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PeopleOnline;