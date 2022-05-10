import React from 'react';
import { Avatar } from '@mui/material';

import './Sidebar.css';



const Sidebar = () => {

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
                <Avatar className='sidebar__avatar'/>
                <h2>Ignacio Bockl</h2>
                <h4>ignaciobockl96@gmail.com</h4>
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