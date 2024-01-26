import React, { useState } from 'react';
import logo from '../images/spocclick.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../fiebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
      const [menuClick, setMenuClick] = useState(false);
   console.log(user);
    return (
        <header>
                 <nav className='header-container'>
                      <div className="logo">
                            <Link to='/home'><img src={logo} alt="" /></Link>
                      </div>
                      <div className= {menuClick ? "element mobile-menu-element" : "element"}>
                        <ul>
                            <li><Link className='ancore' to='/'>Home</Link></li>
                            <li><Link className='ancore' to='/blog'>Blog</Link></li>
                            <li><Link className='ancore' to='/about'>About</Link></li>
                            {
                                user ?
                                <button onClick={logout} style={{backgroundColor: 'transparent', border: '0px', color: 'white'}}>Log out</button>
                                :
                                <li><Link className='ancore' to='/login'>Login</Link></li>
                            }
                            {
                                user ? 
                                <li><Link className='ancore' style={{display: 'none'}} to='/signup'><span className='signup-btn'>Signup</span></Link></li>
                                : 
                                <li><Link className='ancore' to='/signup'><span className='signup-btn'>Signup</span></Link></li>
                            }
                            {
                                user ? 
                                <li><p className='text-light m-0'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ff006a" viewBox="0 0 256 256"><path d="M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"></path></svg>{user.displayName}</p></li>
                                : ""
                            }
                        </ul>
                        <div className="options">
                        <svg onClick={() => setMenuClick(!menuClick)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff006a" viewBox="0 0 256 256"><path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path></svg>
                        </div>
                      </div>
                 </nav>
        </header>
    );
};

export default Header;