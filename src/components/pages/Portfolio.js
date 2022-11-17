import React from 'react'
import nosql from '../../images/nosql.gif';
import note_taker from '../../images/note_taker.png';
import scheduler from '../../images/scheduler.gif';
import weather from '../../images/weather.png';
import furrever from '../../images/furrever.gif';
import good_buys from '../../images/good_buys.gif';

export default function Portfolio() {
    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-6'>Portfolio</h1>
                <div className='image-box-wrapper row row-cols-auto justify-content-center'>
                    <div className='portfolio-image-box'>
                        <figure>
                            <a href='https://github.com/monicadolce/Social_networking'>
                                <img className='portfolio-image' src={nosql} alt='nosql project' />
                                <figcaption className='text-center'>Social Networking</figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                        <figure>
                        <a href='https://morning-brook-53750.herokuapp.com/'>
                        <img className='portfolio-image' src={note_taker} alt='note_taker project' />
                        <figcaption className='text-center'>My Notes</figcaption>
                        </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                    <figure>
                    <a href='https://monicadolce.github.io/Work_Day_Scheduler/'>
                        <img className='portfolio-image' src={scheduler} alt='scheduler project' />
                        <figcaption className='text-center'>Work Day Scheduler</figcaption>
                        </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                    <figure>
                    <a href='https://monicadolce.github.io/Forecast_Dashboard/'>
                        <img className='portfolio-image' src={weather} alt='weather project' />
                        <figcaption className='text-center'>Forecast Dashboard</figcaption>
                        </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                    <figure>
                    <a href='https://enigmatic-gorge-61389.herokuapp.com/'>
                        <img className='portfolio-image' src={furrever} alt='furrever project' />
                        <figcaption className='text-center'>Furrever</figcaption>
                        </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                        <figure>
                        <a href='https://github.com/monicadolce/Good_buys'>
                        <img className='portfolio-image' src={good_buys} alt='horiseon project' />
                        <figcaption className='text-center'>Goodbuys</figcaption>
                        </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
