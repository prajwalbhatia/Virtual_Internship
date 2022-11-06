import React, { useState, useEffect } from 'react';

import { Item, NavbarProps } from '../../constants';

//CSS
import '../../../src/index.scss';
import './style.scss';

//ASSETS
import Logo from "../../assets/logo.svg";
import ArrowSide from "../../assets/arrow-side.svg";
import Circle from "../../assets/circle.svg";
import ArrowLeft from "../../assets/arrow-left.svg";


function Navbar({ items, itemClicked, navToggler }: NavbarProps) {
  const [navItemClick, setNavItemClick] = useState<any>({});
  const [toggleNavBar, setToggleNavBar] = useState<any>(true);

  useEffect(() => {
    const resizing = (e: any) => {
      if (e.target.outerWidth <= 1240) {
        if (toggleNavBar) {
          setToggleNavBar(false);
          navToggler(false);
        }
      }
      else {
        setToggleNavBar(true);
        navToggler(true);
      }
    }

    window.addEventListener('resize', resizing);

    return () => {
      window.addEventListener('resize', resizing)
    }
  }, [])

  useEffect(() => {
    let updatedNavItemClicked: any = { ...navItemClick };
    items.forEach((item) => {
      if (item.children && item.children.length > 0) {
        updatedNavItemClicked[item.id] = false;
      }
    })
    setNavItemClick(updatedNavItemClicked);
  }, [])


  const handleItemClick = (item: Item) => {
    itemClicked(item);
    if (navItemClick.hasOwnProperty(item.id)) {
      let updatedNavItemClicked = { ...navItemClick };
      for (let key in updatedNavItemClicked) {
        if (key === item.id.toString()) updatedNavItemClicked[key] = true
        else updatedNavItemClicked[key] = false
      }
      setNavItemClick(updatedNavItemClicked);
    }
  }

  const toggleNavBarFun = () => {
    let val = !toggleNavBar;
    setToggleNavBar(val);
    navToggler(val);
  }

  return (
    <div className={toggleNavBar ? 'navbar' : 'navbar navbar-small-screen'}>
      <div
        onClick={toggleNavBarFun}
        className={toggleNavBar ? 'nav-toggler' : 'nav-toggler nav-toggler-small-screen'}
      >
        <div className='nav-toggler-inner'>
          <img src={ArrowLeft} alt="arrow-left" />
        </div>
      </div>
      <div className={toggleNavBar ? 'logo-container' : 'logo-container d-none'}>
        <img src={Logo} alt="logo" />
      </div>

      <div className={toggleNavBar ? 'navigation-container' : 'navigation-container d-none'}>
        {
          items.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div
                  className='d-flex-space-btw nav-item'
                  onClick={() => { handleItemClick(item) }}
                >
                  <div className='d-flex left-part'>
                    <span className='nav-icon'> <img src={item.icon} alt={item.title} /></span>
                    <span className='d-flex-c nav-text'>{item.title}</span>
                  </div>

                  {
                    item.children && item.children.length > 0
                      ?
                      <div className='d-flex-c right-part'>
                        <img src={ArrowSide} alt="arrow-side" />
                      </div>
                      :
                      null
                  }
                </div>

                {
                  item.children.length > 0 && navItemClick[item.id]
                    ?
                    item.children.map((subItem) => {
                      return (
                        <div key={subItem.id} className='d-flex-space-btw nav-item'>
                          <div className='d-flex left-part'>
                            <span className='nav-icon'> <img src={Circle} alt={subItem.title} /></span>
                            <span className='d-flex-c nav-text'>{subItem.title}</span>
                          </div>
                        </div>
                      )
                    })
                    :
                    null
                }
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar