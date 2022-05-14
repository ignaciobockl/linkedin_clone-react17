import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Feed from './components/AppBody/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/AppBody/Sidebar';

import Login from './components/Login/Login';

import { login, logout, selectUser } from './features/userSlice';

import './App.css';
import { auth } from './database/firebase';



const App = () => {

    const dispatch = useDispatch();

    const user = useSelector( selectUser );

    useEffect(() => {
        
        auth.onAuthStateChanged(userAuth => {
            if ( userAuth ) {
                // user is logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL,
                }));
            } else {
                // user is logged out
                dispatch(logout());
            }
        })

    }, []);
    

    return (
        <div className='app'>

            <Header />

            {
                !user
                    ? ( <Login /> )
                    : (
                        <div className='app__body'>
                            <Sidebar />

                            <Feed />

                            {/* Widgets */}

                        </div>
                    )
            }

        </div>
    );
}

export default App;