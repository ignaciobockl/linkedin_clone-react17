import React from 'react';

import './Header.css';



const Header = () => {
    return (
        <div className='header'>

            <h1>This is the header</h1>

            <div className="header__left">
                <img src='' alt=''/>
            </div>

            <div className="header__right">
                {/* SearchIcon */}
                <input type='text'/>
            </div>

        </div>
    )
}

export default Header;