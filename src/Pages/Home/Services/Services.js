import React from 'react';
import image1 from '../../../images/1.jpg';
import image2 from '../../../images/2.jpg';
import image3 from '../../../images/3.jpg';
import './Services.css';
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const navigate = useNavigate();
    const handleCheck = () =>{
      navigate('/checkout')
    }
    return (
        <div className='card-container mt-5'>
            <div className="cards text-center">
                <img src={image1} alt="" />
                <h3>Basic $50</h3>
                <div className="parent text-center d-flex justify-content-center">
                <div className="ele">
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>2 hours of event coverage</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Up to 100 high-quality photos</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Basic photo editing included</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Digital delivery within 48 hours</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Access to an online gallery.</p>
                </div>
                </div>
                <button onClick={handleCheck} className='checkout fw-bold'>Checkout</button>
            </div>
            <div className="cards text-center">
                <img src={image2} alt="" />
                <h3>Standard $120</h3>
                <div className="parent text-center d-flex justify-content-center">
                <div className="ele">
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Full-day coverage (up to 8 hours)</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Up to 200 high-quality photos</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Advanced photo editing included</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Digital delivery within 72 hours</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg> To purchase professional prints</p>
                </div>
                </div>
                <button onClick={handleCheck} className='checkout fw-bold'>Checkout</button>
            </div>
            <div className="cards text-center">
                <img src={image3} alt="" />
                <h3>Premium $170</h3>
                <div className="parent text-center d-flex justify-content-center">
                <div className="ele">
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Full-day coverage (up to 12 hours)e</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Up to 300 high-quality photos</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Extensive photo retouching</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Priority digital delivery within 48 hours</p>
                <p className='d-flex align-items-center'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>Professional prints included</p>
                </div>
                </div>
                <button onClick={handleCheck} className='checkout fw-bold'>Checkout</button>
            </div>
        </div>
    );
};

export default Services;