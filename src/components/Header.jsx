import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

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
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type='text'/>
            </div>

            <div className="header__right">
                
            </div>

        </div>
    )
}

export default Header;