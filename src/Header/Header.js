import React from 'react';
import logo from '../images/spocclick.png';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <header>
                 <nav>
                      <div className="logo">
                            <img src={logo} alt="" />
                      </div>
                      <div className="element">
                        <ul>
                            <li><Link className='ancore' to='/'>Home</Link></li>
                            <li><Link className='ancore' to='/blog'>Blog</Link></li>
                            <li><Link className='ancore' to='/about'>About</Link></li>
                            <li><Link className='ancore' to='/login'>Login</Link></li>
                            <li><Link className='ancore' to='/signup'><span className='signup-btn'>Signup</span></Link></li>
                        </ul>
                        
                      </div>
                 </nav>
        </header>
    );
};

export default Header;