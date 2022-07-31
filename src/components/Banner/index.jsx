import React from 'react';
import VideoModal from '../Modal/VideoModal';

import './banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner__img">
        <img src="https://www.sonypictures.com/sites/default/files/styles/max_2600x2600/public/banner-images/2019-01/breakingbad_herobanner_2572x1100_v2.jpg" alt="" />
      </div>
      <div className="banner__content">
        <VideoModal />
      </div>      
    </div>
  )
}
export default Banner;