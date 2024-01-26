import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
       <div className="main-parent d-flex justify-content-center mt-5">
         <div>
                <div className="p-question">
                <div className="question">
                    <h3 className='text-center'>Difference between authorization and authentication: </h3>
                    <h4>Authentication: </h4>
                    <p>Authentication is the process of verifying the identity of a user. The main goal of authentication is to ensure the exact identity of a user. Authentication methods include passwords, biometrics such as fingerprints or facial recognition, smart cards, two-factor authentication, and more.</p>
                </div>
                <div className="question">
                    <h4>Authorization: </h4>
                    <p> Authorization is the process of granting or denying access to specific resources or actions based on the authenticated entity's permissions and privileges. It determines what actions or resources a user, system, or application is allowed to access or modify after their identity has been authenticated.</p>
                </div>
                </div>
               <div className="p-question">
               <div className="question">
                  
                  <h3>Why are you using firebase?</h3>
                  <p>It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.</p>
              </div>
              <div className="question">
                  <h3>What other options do you have to implement authentication?</h3>
                  <p>1. Multi-factor authentication</p>
                  <p>2. Biometrics</p>
                  <p>3. OpenID</p>
                  <p>4. Passwordless authentication</p>
              </div>
               </div>
               <div className="p-question">
               <div className="question">
                    <h3>What other services does firebase provide other than authentication?</h3>
                    <p>All the Firebase Apps registered to the same Firebase project share the same backends, like Firebase Hosting, Authentication, Realtime Database, Cloud Firestore, Cloud Storage, and Cloud Functions.</p>
                </div>
               </div>
        </div>
       </div>
    );
};

export default Blog;