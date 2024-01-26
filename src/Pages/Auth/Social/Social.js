import React from 'react';
import googleLogo from '../../../images/google.png';
import './Social.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../fiebase.init';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
      
            <div className="google-button" onClick={() => signInWithGoogle()}>
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