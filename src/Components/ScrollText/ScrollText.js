import React from 'react';
import './ScrollText.css';

const ScrollText = (props) => {
   console.log(props, "props")
    const allText =  props.crawlText.map((eachText) => {

        return eachText;
    })
    const randomText = allText[Math.floor(Math.random()*allText.length)]
    
    return (
        <div>
          <div class="fade"></div>
            <section class="star-wars">
              <div class="crawl">
                <div class="title">
                  <h3>star-wars</h3>
                  <h4>{randomText}</h4>
              </div>  
            </div>
            </section>
        </div>
    )
}

export default ScrollText;