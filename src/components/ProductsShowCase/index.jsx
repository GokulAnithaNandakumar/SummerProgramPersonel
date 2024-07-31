import React, { useEffect } from 'react'
import "./productsShowcase.css";
import mockup from "../../common/Images/mockup.png";
import { useState } from 'react';
import { useRef } from 'react';

const ProductsShowCase = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAnimation = (e) => {
      if (e[0].isIntersecting)  
        setShowAnimation(true);
    }
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    

    useEffect(() => {
      const observer = new IntersectionObserver(toggleAnimation, options);
      if (!showAnimation) {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
     });

  return (
    <div className={`product-showcase max-width ${showAnimation?"scale-up-bottom":""}`} ref={ref}>
        {showAnimation && (<div className='product-showcase-wrapper'>
          <img src={mockup} alt="mockup" className="showcase-ui showcase-mockup-2" />
          <img src={mockup} alt="mockup" className="showcase-ui showcase-mockup-3" />
          <img src={mockup} alt="mockup" className="showcase-ui showcase-mockup-4" />
        </div>)} 
    </div>
  )
}

export default ProductsShowCase;
