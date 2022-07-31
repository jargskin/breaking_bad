import React, { useState, useEffect } from 'react';
import './scrollToTop.scss';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };
  return (
      <div className="top-to-btm">
        {showTopBtn ? <div className='container-scroll-icon-style' onClick={goToTop}><i className="fas fa-chevron-up"/></div> : null}
      </div>
  );
};
export default ScrollToTop;
