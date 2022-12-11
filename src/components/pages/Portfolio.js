import React from 'react'
import scheduler from '../../images/scheduler.gif';
import furrever from '../../images/furrever.gif';
import medley from '../../images/medley.gif';
import book_look from '../../images/book_look.gif';


export default function Portfolio() {
    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-6'>Portfolio</h1>
                <div className='image-box-wrapper row row-cols-auto justify-content-center'>
                    <div className='portfolio-image-box'>
                        <figure>
                            <a href='https://serene-gorge-47802.herokuapp.com/'>
                                <img className='portfolio-image' src={book_look} alt='book_look project' />
                                <figcaption className='text-center'>Book Look</figcaption>
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
                            <a href='https://medley.herokuapp.com/'>
                                <img className='portfolio-image' src={medley} alt='medley project' />
                                <figcaption className='text-center'>Medley</figcaption>
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
                </div>
            </div>
        </div>
    )
}
