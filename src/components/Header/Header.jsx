import React from 'react';
import { useDispatch } from 'react-redux';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import HeaderOption from './HeaderOption';

import { auth } from '../../database/firebase';

import { logout } from '../../features/userSlice';

import './Header.css';



const Header = () => {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>

            <div className="header__left">    
                <img 
                    alt=''
                    // https://www.flaticon.com/premium-icon/linkedin_3536505?term=linkedin&page=1&position=2&page=1&position=2&related_id=3536505&origin=search
                    src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1651955409~hmac=f87afc072b3171a1f1a67378a6eb22b8' 
                />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type='text'/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={ HomeIcon } title='Home'/>
                <HeaderOption Icon={ SupervisorAccountIcon } title='My Network'/>
                <HeaderOption Icon={ BusinessCenterIcon } title='Jobs'/>
                <HeaderOption Icon={ ChatIcon } title='Messaging'/>
                <HeaderOption Icon={ NotificationsIcon } title='Notifications'/>
                <HeaderOption 
                    avatar={ true }
                    onClick={ logoutOfApp }
                    title='me'
                />
            </div>

        </div>
    )
}

export default Header;