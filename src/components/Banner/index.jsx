import React from 'react';
import './banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner__img">
        <img src="https://www.sonypictures.com/sites/default/files/styles/max_2600x2600/public/banner-images/2019-01/breakingbad_herobanner_2572x1100_v2.jpg" alt="" />
      </div>
      <div className='banner__content'>
        <h1 className='banner__title'>
          Breaking Bad
        </h1>
        <p className='banner__subtitle'>
          Breaking Bad is an American crime drama television series created by Vince Gilligan.
        </p>
      </div>
    </div>
  )
}
export default Banner;