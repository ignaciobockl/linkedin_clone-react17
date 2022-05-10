import React from 'react';

import Feed from './components/AppBody/Feed/Feed';
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
                <Feed />

                {/* Widgets */}


            </div>

        </div>
    );
}

export default App;