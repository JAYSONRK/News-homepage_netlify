import React from 'react';

const News = () => {
  return (<>
    <section className='news'>
        <article className="news-post">
            <div className="news-heading">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="news-detail">
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <div className='read-more'>
                <button type="submit">Read more</button>
              </div>
            </div>
        </article>
    </section>
  </>)
}

export default News;