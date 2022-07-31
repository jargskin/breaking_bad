import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './index.scss';

const Navbar = ({ scroll, objRef }) => {
  return (
    <header>
      <nav className="header__container">
        <div className="header__container__logo">
          <img src="./images/breaking_bad_logo.png" alt="" />
        </div>
        <Dropdown className='menu-responsive'>
          <Dropdown.Toggle id="dropdown-basic">
            <i className="fa fa-bars" aria-hidden="true" />
          </Dropdown.Toggle>

          <Dropdown.Menu variant='dark'>
            <Dropdown.Item  onClick={() => scroll(objRef.characterRef)}>Characters</Dropdown.Item>
            <Dropdown.Item onClick={() => scroll(objRef.episodesRef)}>Episodes</Dropdown.Item>
            <Dropdown.Item onClick={() => scroll(objRef.episodesRelatedRef)}>Related series</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

