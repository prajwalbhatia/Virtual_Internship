import React, { useState } from 'react';

import { PostsProp, ICONS } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import UserMessage from './user-message';

import Posts from '../posts/posts';

function ChatBox({ }: any) {
  return (
    <div className='chat-box'>
      <div className='d-flex w-100 chat-header'>
        <div className='flex-1 flex-col d-flex-c'>
          <div className='text text-active'>CHAT</div>
          <div className='horizontal active'></div>
        </div>

        <div className='flex-1 flex-col d-flex-c'>
          <div className='text'>Participants(9)</div>
          <div className='horizontal'></div>
        </div>
      </div>
      <UserMessage />

      <UserMessage />
      <UserMessage />
      <UserMessage />

      <div className='m-b-2'>
        <Posts
          postText={() => {

          }}
          btnAction={() => {

          }}
          type="chat"
        />
      </div>
    </div>
  )
}

export default ChatBox;