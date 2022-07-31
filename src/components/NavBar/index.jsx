import React from 'react'
import './index.scss';

const Navbar = ({ scroll, objRef }) => {
  return (
    <header>
      <nav className="header__container">
        <div className="header__container__logo">
          <img src="./images/breaking_bad_logo.png" alt="" />
        </div>
        <ul className="header__container__list" id="menu">
          <li onClick={() => scroll(objRef.characterRef)}>Characters</li>
          <li onClick={() => scroll(objRef.episodesRef)}>Episodes</li>
          <li onClick={() => scroll(objRef.episodesRelatedRef)}>Related series</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;

