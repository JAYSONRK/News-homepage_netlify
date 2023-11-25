import React from 'react';
import Close from './images/icon-menu-close.svg';

const Toggle = (prop) => {
    return (<>
        <div className='toggle'>
            <div className="toggle-close">
                <img src={Close} alt="close" onClick={prop.toggleClose}/>
            </div>
            <ul className="toggle-list">
                <li><a href="#menu" onClick={prop.toggleClose}>Home</a></li>
                <li><a href="#new" onClick={prop.toggleClose}>New</a></li>
                <li><a href="#popular" onClick={prop.toggleClose}>Popular</a></li>
                <li onClick={prop.toggleClose}>Trending</li>
                <li onClick={prop.toggleClose}>Categories</li>
            </ul>
        </div>
    </>)
}

export default Toggle;