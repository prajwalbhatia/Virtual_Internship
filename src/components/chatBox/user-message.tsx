import React from 'react';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import UserDp from "../../assets/master.svg";
import Flag from "../../assets/flag.svg";

function UserMessage() {
  return (
    <div className='user-container'>
      <div className='user-message'>
        <div className='user-message-inner'>
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
                  </div>

                  <div className='post-text-container'>
                    Tell Users what to think'
                    Yeah, you heard it right!
                    Steve Krug, the legendary UX expert and bestselling author of 'Don't Make Me Think' on web usability and human-computer interaction is the mind behind this principle
                  </div>
                </div>

                <div className='time-container'>
                  <span className='time'>1:22</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default UserMessage