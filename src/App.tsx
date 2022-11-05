import React from 'react';
import './App.scss';

import Posts from './components/posts/posts';
import Community from './components/community/community';
import UserPost from './components/userPost/userPost';
import Frame from './components/frame/frame';

//ASSETS
import Home from "./assets/home.svg";
import BookOpen from "./assets/book-open.svg";
import Hand from "./assets/hand-first.svg";
import Briefcase from './assets/briefcase.svg';
import { Item } from './constants';

function App() {
  return (
    <>
      <div className="App">
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
    </>
  );
}

export default App;
