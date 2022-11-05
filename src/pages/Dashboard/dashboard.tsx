import React from 'react';

//COMPONENTS
import Posts from '../../components/posts/posts';
import Community from '../../components/community/community';
import UserPost from '../../components/userPost/userPost';
import Frame from '../../components/frame/frame';

//CSS
import '../../../src/index.scss';
import './style.scss';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Frame>
        <div className='d-flex'>
          <div className='left-part-page'>
            <Posts
              postText={() => {

              }}
              btnAction={() => {

              }}
              type="post"
            />

            <div className='your-highlight'>Your Highlights</div>
            <UserPost />

          </div>
          <div className='community-container'>
            <Community />
          </div>
        </div>
      </Frame>
    </div>
  )
}

export default Dashboard