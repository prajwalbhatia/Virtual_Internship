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
import Posts from '../posts/posts';


// { postText, btnAction }: PostsProp
function Comment() {
  return (
    <div className='comment'>
      <div className='comment-inner'>
        <div className='d-flex-space-btw post-user-detail-container'>
          <div className='d-flex width-100'>
            <div className='d-flex-c profile-container'>
              <img src={UserDp} alt="user-icon" />
            </div>
            <div className='d-flex user-info-container'>
              <div>
                <div className='top'>
                  <div className='flag'>
                    <img src={Flag} alt="flag-icon" />
                  </div>
                  <span className='username'>Cantthinkof Aname</span>
                  <span className='dot'></span>
                  <span className='desigination'>Intern at Virtual Internships</span>
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

                </div>
                </div>

                <div className='time-container'>
                  <span className='time'>11h</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      )
}

      export default Comment;