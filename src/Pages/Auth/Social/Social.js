import React from 'react';
import googleLogo from '../../../images/google.png';
import './Social.css';
const Social = () => {
    return (
      
            <div className="google-button">
                <div className="img me-2">
                    <img src={googleLogo} alt="" />
                </div>
                <div className="para ms-2">
                    <p>Countinue with Google</p>
                </div>
            </div>
      
    );
};

export default Social;