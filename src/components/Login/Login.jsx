import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../../database/firebase';
import { login } from '../../features/userSlice';

import './Login.css';



const Login = () => {

    const dispatch = useDispatch();

    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ profilePic, setProfilePic ] = useState('');

    const loginToApp = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            })
            .catch(err => alert(err.message));
    };

    const register = () => {
        if ( !name ) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    })
                    );
                });
            })
            .catch(err => alert(err.message));
    };

    return (
        <div className="login">

            <img 
                alt=''
                src='https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo-4.png' 
            />

            <form>

                <input 
                    onChange={ e => setName(e.target.value) } 
                    placeholder='Full name (required if registering)' 
                    type='text' 
                    value={ name }
                />

                <input 
                    onChange={ e => setProfilePic(e.target.value) }
                    placeholder='Profile pic URL (optional)' 
                    type='text'
                    value={ profilePic }
                />

                <input 
                    onChange={ e => setEmail(e.target.value) } 
                    placeholder='Email' 
                    type='email' 
                    value={ email }
                />

                <input 
                    onChange={ e => setPassword(e.target.value) } 
                    placeholder='Password' 
                    type='password' 
                    value={ password }
                />

                <button
                    onClick={ loginToApp }
                    type='submit'
                >
                    Sign In
                </button>

            </form>

            <p>
                Not a member?{' '}
                <span className='login__register' onClick={ register }>Register Now</span>
            </p>

        </div>
    )
}

export default Login;