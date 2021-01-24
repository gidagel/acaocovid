import React, {useState} from 'react'
import HeaderLinks from './HeaderLinks'

const HeaderSmall = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
      setToggleMenu(!toggleMenu)
  }

  return (
      <nav className="header_small">
          <button 
              className="header_small_button" 
              onClick={handleToggle}
          >
              Menu
          </button>
          {toggleMenu 
              ? <HeaderLinks handleToggle={handleToggle}/>
                  : ""}
      </nav>
  )
}
export default HeaderSmall