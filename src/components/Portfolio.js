import React from 'react'
import nosql from '../images/nosql.gif';
import note_taker from '../images/note_taker.png';
import scheduler from '../images/scheduler.gif';
import weather from '../images/weather.png';

const Portfolio = () => {
    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src={nosql} alt='nosql project' />
                    </div>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src={note_taker} alt='note_taker project' />
                    </div>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src={scheduler} alt='scheduler project' />
                    </div>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src={weather} alt='weather project' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio