import React from 'react'
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box-item">
        <i className="fa fa-users" aria-hidden="true"></i>
        <p className="footer__box-item__title">Managment</p>
        <span className="footer__box-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className="footer__box-item">
        <i className="fa-solid fa-globe"></i>
        <p className="footer__box-item__title">planning</p>
        <span className="footer__box-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className="footer__box-item">
        <i className="fa-solid fa-store"></i>
        <p className="footer__box-item__title">Marketing</p>
        <span className="footer__box-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className="footer__box-item">
        <i className="fa-solid fa-file-pen"></i>
        <p className="footer__box-item__title">Report</p>
        <span className="footer__box-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
    </footer>
  )
}
export default Footer;
