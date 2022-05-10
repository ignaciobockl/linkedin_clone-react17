import React from 'react';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import HeaderOption from './HeaderOption';

import './Header.css';



const Header = () => {
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
                    <input type='text'/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={ HomeIcon } title='Home'/>
                <HeaderOption Icon={ SupervisorAccountIcon } title='My Network'/>
                <HeaderOption Icon={ BusinessCenterIcon } title='Jobs'/>
                <HeaderOption Icon={ ChatIcon } title='Messaging'/>
                <HeaderOption Icon={ NotificationsIcon } title='Notifications'/>
                <HeaderOption 
                    avatar='https://img1.freepng.es/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg'
                    title='me'
                />
            </div>

        </div>
    )
}

export default Header;