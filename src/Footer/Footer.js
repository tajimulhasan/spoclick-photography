import React from 'react';
import './Footer.css';
import image from '../images/spocclick.png';
const Footer = () => {
    return (
       <footer className=''>
         <div className="all d-flex justify-content-between align-items-center text-center">
         <div className="logo">
                  <img src={image} alt="" />
            </div>
            <div className="details d-flex justify-content-between align-items-center text-center text-light">
              <p>Privcy Policy</p>
              <p>Terms of Use</p>
               <p>Pricing</p>
            </div>
         </div>
         <p className='m-0 text-center right'>All right reserved © SPOCLICK Photograpy</p>
       </footer>
    );
};

export default Footer;