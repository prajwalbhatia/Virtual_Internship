import React from 'react';
import { useNavigate } from "react-router-dom";

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Master1 from "../../assets/master1.svg";
import Master2 from "../../assets/master2.svg";
import Master3 from "../../assets/master3.svg";

import { OutlinedPrimaryButton, PrimaryButton } from '../button/button';
import { SpaceProps } from '../../constants';

function Space({ tags, topic }: SpaceProps) {
  const navigate = useNavigate();
  return (
    <div className='space'>
      <div className='tag-container'>
        {
          tags.map((tag) => {
            return (
              <div key={tag.id} className='tag'>{tag.tag}</div>

            )
          })
        }
      </div>

      <div className='topic-container'>
        <span className='text-bold'>Topic: </span>
        <span>{topic}</span>
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
            click={() => { navigate('/video-call') }}
          />
        </div>
      </div>
    </div>
  )
}

export default Space