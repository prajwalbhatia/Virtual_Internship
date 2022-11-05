import React from 'react';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Master1 from "../../assets/master1.svg";
import Master2 from "../../assets/master2.svg";
import Master3 from "../../assets/master3.svg";

import { OutlinedPrimaryButton, PrimaryButton } from '../button/button';

function Space() {
  return (
    <div className='space'>
      <div className='tag-container'>
        <div className='tag'>UX</div>
        <div className='tag'>Product Design</div>
      </div>

      <div className='topic-container'>
        <span className='text-bold'>Topic: </span>
        <span>Subliminal messages in advertisement</span>
      </div>

      <div className='member-onine-container'>
        <div className='left-part'>
          <img className='member-icon' src={Master1} alt="profile-icon" />
          <img className='member-icon' src={Master2} alt="profile-icon" />
          <img className='member-icon' src={Master3} alt="profile-icon" />
          <span>+6 more</span>
        </div>
        <div className='right-part'>
          Ends in 33 mins
        </div>
      </div>

      <div className='action-btn-container'>
        <div className='btn-container'>
          <PrimaryButton
            name="Contribute"
            click={() => { }}
            btnContainerClass="m-r-1"
          />

          <OutlinedPrimaryButton
            name="View"
            click={() => { }}
          />
        </div>
      </div>
    </div>
  )
}

export default Space