import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar } from '@mui/material';

import { selectUser } from '../../features/userSlice';

import './Sidebar.css';



const Sidebar = () => {

    const user = useSelector( selectUser );

    const recentItem = ( topic ) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{ topic }</p>
        </div>
    );

    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img 
                    alt=''
                    src='https://img.freepik.com/vector-gratis/desarrollador-programador-escribe-codigos-lenguaje-
                        especial-computadora-software-codificacion-scripts-ingenieria-web-ilustracion-vectorial-
                        dibujada-mano-aislada-sobre-fondo-claro-estilo-moderno-dibujos-animados-planos_318237-397.jpg?w=2000' 
                />
                <Avatar className='sidebar__avatar' src={ user.photoURL }>
                    { user.email[0] }
                </Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2589</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1590</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                { recentItem('reactjs') }
                { recentItem('programming') }
                { recentItem('softwareengineering') }
                { recentItem('desing') }
                { recentItem('developer') }
            </div>

        </div>
    )
}

export default Sidebar;