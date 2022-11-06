import React from 'react'
import ChatBox from '../../components/chatBox/chatBox';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Call1 from "../../assets/call-1.svg";
import Call2 from "../../assets/call-2.svg";
import Call3 from "../../assets/call-3.svg";
import Call4 from "../../assets/call-4.svg";


function VideoCall() {
  return (
    <div className='video-call'>
      <div className='call'>
        <div className='topic-container'>
          <span className='text-bold'>Topic: </span>
          <span>Subliminal messages in advertisement</span>
        </div>

        <div className='calling'>
          <div className="d-flex-a-c">
            <div className='d-flex flex-1 p-1'>
              <img src={Call1} alt="user-icon" />
            </div>
            <div className='d-flex flex-1 p-1'>
              <img src={Call2} alt="user-icon" />
            </div>
          </div>

          <div className="d-flex-a-c">
            <div className='d-flex flex-1 p-1'>
              <img src={Call3} alt="user-icon" />
            </div>

            <div className='d-flex flex-1 p-1'>
              <img src={Call4} alt="user-icon" />
            </div>
          </div>

        </div>

        <div className='calling-btns'></div>
      </div>

      <div className='chat-container'>
        <ChatBox />
      </div>
    </div>
  )
}

export default VideoCall