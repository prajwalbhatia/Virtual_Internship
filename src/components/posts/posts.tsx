import React, { useState } from 'react';

import { PostsProp, ICONS } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Profile from "../../assets/profile.svg";
import Search from "../../assets/search.svg";
import Add from "../../assets/add.svg";
import Smiley from "../../assets/smiley.svg";
import Font from "../../assets/font.svg";
import Video from "../../assets/video.svg";
import Mic from "../../assets/mic.svg";
import At from "../../assets/at.svg";

import { PrimaryButton } from "../button/button";

function Posts({ postText, btnAction }: PostsProp) {
  const [postTextVal, setPostTextVal] = useState('');

  const handlePostText = (e: any) => {
    setPostTextVal(e.target.value);
    postText(e.target.value);
  }

  const buttonAction = (btnName: string) => {
    btnAction(btnName)
  }

  return (
    <div className='posts'>
      <div className='d-flex post-inner'>
        <div className='dp-container'>
          <div className='d-flex-c profile-container'>
            <img src={Profile} alt="profile-icon" />
          </div>
        </div>
        <div className='post-input-container'>
          <div className='text-area'>
            <textarea
              rows={4} cols={50}
              onChange={handlePostText}
              placeholder='What’s on your mind?'
              value={postTextVal}
            />
          </div>
          <div className='action-btn-area'>
            <div className='left-part'>
              <div
                onClick={() => buttonAction(ICONS.addIcon)}
                className='d-flex-c add-icon-container post-icons'
              >
                <img className='' src={Add} alt="add-icon" />
              </div>
              <div className='horizontal post-icons'></div>
              <img
                className='post-icons'
                src={Video}
                onClick={() => buttonAction(ICONS.videoIcon)}
                alt="video-icon"
              />
              <img
                className='post-icons'
                src={Mic}
                onClick={() => buttonAction(ICONS.micIcon)}
                alt="mic-icon"
              />
              <div className='horizontal post-icons'></div>
              <img className='post-icons' src={Smiley} alt="profile-icon" />
              <img className='post-icons' src={At} alt="profile-icon" />
              <img className='post-icons' src={Font} alt="profile-icon" />
            </div>
            <div className='right-part'>
              <PrimaryButton
                name="Post"
                click={() => buttonAction(ICONS.post)}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Posts;