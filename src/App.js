import React from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/AppBody/Sidebar';

import './App.css';



const App = () => {
    return (
        <div className='app'>

            {/* Header */}
            <Header />

            {/* App Body */}
            <div className='app__body'>
                {/* Sidebar */}
                <Sidebar />

                {/* Feed */}


                {/* Widgets */}


            </div>

        </div>
    );
}

export default App;