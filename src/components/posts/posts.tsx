import React, { useState , useEffect } from 'react';

import { PostsProp, ICONS } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Profile from "../../assets/profile.svg";
import Add from "../../assets/add.svg";
import Smiley from "../../assets/smiley.svg";
import Font from "../../assets/font.svg";
import Video from "../../assets/video.svg";
import Mic from "../../assets/mic.svg";
import At from "../../assets/at.svg";

import { PrimaryButton } from "../button/button";
//type - thoughts or post
function Posts({ postText, btnAction, type }: PostsProp) {
  const [postTextVal, setPostTextVal] = useState('');
  const [textAreaFocus, setTextAreaFocus] = useState(false);

  const handlePostText = (e: any) => {
    setPostTextVal(e.target.value);
    postText(e.target.value);
  }

  const buttonAction = (btnName: string) => {
    btnAction(btnName)
  }

  useEffect(() => {
      if(type === 'post')
      {
        setTextAreaFocus(true);
      }
  }, [])
  

  return (
    <div
      className='posts'
      style={type === 'post' ? { padding: '2rem' } : {}}
    >
      <div className='d-flex post-inner'>
        <div className='dp-container'>
          <div className='d-flex-c profile-container'>
            <img src={Profile} alt="profile-icon" />
          </div>
        </div>
        <div className='post-input-container'>
          <div className='text-area'>
            <textarea
              rows={textAreaFocus ? 4 : 1}
              cols={50}
              onChange={handlePostText}
              placeholder={type === 'thoughts' ? 'Share your thoughts...' : 'What’s on your mind?'}
              value={postTextVal}
              onFocus={() => { setTextAreaFocus(true) }}
              onBlur={() => { setTextAreaFocus(false) }}
            />
          </div>
          <div className={textAreaFocus ? 'action-btn-area' : 'action-btn-area d-none'}>
            <div className='left-part'>
              <div
                onClick={() => buttonAction(ICONS.addIcon)}
                className='d-flex-c add-icon-container post-icons'
              >
                <img className='' src={Add} alt="add-icon" />
              </div>
              <div className='vertical post-icons'></div>
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
              <div className='vertical post-icons'></div>
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