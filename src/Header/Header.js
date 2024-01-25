import React from 'react';
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
    return (
        <header>
                 <nav>
                      <div className="logo">
                            <Link to='/home'><img src={logo} alt="" /></Link>
                      </div>
                      <div className="element">
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
                        </ul>
                        
                      </div>
                 </nav>
        </header>
    );
};

export default Header;