import React from 'react';
import Retro from './images/image-retro-pcs.jpg';
import Laptop from './images/image-top-laptops.jpg';
import Gaming from './images/image-gaming-growth.jpg';

const Extra = () => {
  return (<>
    <section id="popular" className='extra'>
        <article className="alfa">
            <picture className="retro">
                <img src={Retro} alt="retro"/>
            </picture>
            <div className='alfa-article'>
                <h1>01</h1>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </article>
        <article className="beta">
            <picture className="laptop">
                <img src={Laptop} alt="laptop"/>
            </picture>
            <div className='beta-article'>
                <h1>02</h1>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </article>
        <article className="gama">
            <picture className="gaming">
                <img src={Gaming} alt="gaming"/>
            </picture>
            <div className='gama-article'>
                <h1>03</h1>
                <h3>The Growth of Gaming2</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </article>
    </section>
  </>)
}

export default Extra;