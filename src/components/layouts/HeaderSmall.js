import React, {useState} from 'react'
import HeaderLinks from './HeaderLinks'
import mainLogo from '../../images/main_logo.jpg'
import { MenuIcon } from '../Icons'

const HeaderSmall = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
      setToggleMenu(!toggleMenu)
  }

  return (
      <nav className="header_small">
          <div className="header_mobile">
            <div className="mobilelogo">
                <a href="/">
                    <img src={mainLogo} alt="Ação Covid-19 Logo Mobile" />
                </a>
            </div>
            <button 
                className="header_small_button" 
                onClick={handleToggle}
            >
                <MenuIcon />
            </button>
          </div>
          {toggleMenu 
              ? <HeaderLinks handleToggle={handleToggle}/>
              : ""
          }
      </nav>
  )
}
export default HeaderSmall