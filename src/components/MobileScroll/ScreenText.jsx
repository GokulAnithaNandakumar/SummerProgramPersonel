import React from 'react'
import { useState } from 'react';
import { useRef, useEffect } from 'react';

const ScreenText = ({ screen, i, setCurrentImg }) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAnimation = (e) => {
      if (e[0].isIntersecting) {
        setShowAnimation(true);
        setCurrentImg(i);
      }
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    

    useEffect(() => {
      const observer = new IntersectionObserver(toggleAnimation, options);
        if (ref.current) {
          observer.observe(ref.current);
        }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
     });

  return (
    <div className={`screen-text ${showAnimation ? 'text-visible' : ''}`} ref={ref}>
        <div className='screen-heading'>
            {screen.heading}
        </div>
        <div className="mobile-mockup-wrapper only-mobile">
          <div className="mobile-mockup">
            <div className="mobile-mockup-screen flex">
              <img src={screen.mobile_img} alt="" className='mobile-screen-img' key={screen.mobile_img} />
            </div>
          </div>
        </div>
        <div className='screen-description'>
            {screen.description}
        </div>
    </div>
  )
}

export default ScreenText
