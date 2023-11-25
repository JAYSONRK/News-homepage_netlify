import React from 'react';
import Image_desktop from './images/image-web-3-desktop.jpg';
import Image_mobile from './images/image-web-3-mobile.jpg';

const Picture = () => {
  return (<>
    <picture className='picture'>
      <source media="(min-width:768px)" srcSet={Image_desktop}/>
      <img src={Image_mobile} alt="main"/>
    </picture>
  </>)
}

export default Picture;