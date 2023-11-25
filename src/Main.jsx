import React,{ useState } from 'react';
import Header from './Header';
import Picture from './Picture';
import News from './News';
import Highlights from './Highlights';
import Extra from './Extra';
import Toggle from './Toggle';

const Main = () => {
  const [slide, setSlide] = useState(false);
  const toggleAction = () => {
    setSlide(!slide)
  }
  return (<>
    <main className='card'>
        {slide && <Toggle
        toggleClose={toggleAction}
        />}
        <Header 
          toggleevent = {toggleAction}
        />
        <div className="news-body">
          <div className="main-news">
            <Picture/>
            <News/>
          </div>
          <Highlights/>
          <Extra/>
        </div>
    </main>
  </>)
}

export default Main;