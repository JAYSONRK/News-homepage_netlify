import React from 'react';
import Menu from "./images/icon-menu.svg"

const Header = (prop) => {
  return (<>
    <section className='header'>
        <div className="logo">
            <h1>W.</h1>
        </div>
        <div id="menu" className="menu">
            <img className="toggle-icon" src={Menu} alt="menu" onClick={prop.toggleevent}/>
          <div className="menu-bar">
            <ul className="menu-list">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>
    </section>
  </>)
}

export default Header;