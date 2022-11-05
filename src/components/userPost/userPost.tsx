import React, { useState } from 'react';

import { PostsProp } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Bookmark from "../../assets/bookmark-post.svg";
import UserDp from "../../assets/master.svg";
import Flag from "../../assets/flag.svg";
import Chat from "../../assets/comment.svg";

//COMPONENTS
import Posts from '../posts/posts';
import Comment from '../comment/comment';

// { postText, btnAction }: PostsProp
function UserPost() {

  return (
    <div className='user-post'>
      <div className='user-post-inner'>
        <div className='d-flex-space-btw post-user-detail-container'>
          <div className='d-flex'>
            <div className='d-flex-c profile-container'>
              <img src={UserDp} alt="user-icon" />
            </div>
            <div className='user-info-container'>
              <div className='top'>
                <div className='flag'>
                  <img src={Flag} alt="flag-icon" />
                </div>
                <span className='username'>Cantthinkof Aname</span>
                <span className='dot'></span>
                <span className='desigination'>Intern at Virtual Internships</span>
              </div>
              <div className='bottom'>
                <span className='time'>11h</span>
                <span className='dot'></span>
                <div className='tag-container'>
                  <div className='tag'>UX</div>
                  <div className='tag'>Product Design</div>
                </div>
              </div>
            </div>
          </div>
          <div className='bookmarks-container'>
            <img src={Bookmark} alt="bookmark-icon" />
          </div>
        </div>

        <div className='post-text-container'>
          Tell Users what to think'
          Yeah, you heard it right!
          Steve Krug, the legendary UX expert and bestselling author of 'Don't Make Me Think' on web usability and human-computer interaction is the mind behind this principle ...see more
        </div>

        <div className='post-reaction-container'>
          <div className='reactions'>
            <div className='reaction'>
              <span>💓 1</span>
            </div>

            <div className='reaction'>
              <span>💡 1</span>
            </div>

            <div className='reaction'>
              <span>👏 1</span>
            </div>
          </div>

          <div className='d-flex-c chat-icon-container'>
            <img src={Chat} alt="chat-icon" />
            <span>6</span>
          </div>
        </div>

        <div className='horizontal'></div>

        <div className='thoughts-container'>
          <Posts
            postText={() => {

            }}
            btnAction={() => {

            }}
            type="thoughts"
          />
        </div>

        <div className='comments-container'>
          <Comment/>

          <Comment />

        </div>
      </div>
    </div>
  )
}

export default UserPost;