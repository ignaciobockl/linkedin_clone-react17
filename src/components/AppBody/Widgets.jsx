import React from 'react';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';

import './Widgets.css';


// 3-04-56
const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{ heading }</h4>
                <p>{ subtitle }</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('React 2022', 'Top news - 9099 readers')}
            {newsArticle('Coronavirus: Argentina updates', 'Top news - 886 readers')}
            {newsArticle('Tesla hits new highs', 'Cars - 575 readers')}
            {newsArticle('Is Redux too good?', 'Code - 338 readers')}
            {newsArticle('VW Lovers: Golf GTI MK8 2022', 'Cars - 125 readers')}
        </div>
    )
}

export default Widgets;