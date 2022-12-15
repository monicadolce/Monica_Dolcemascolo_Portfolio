import React from 'react'
import scheduler from '../assets/scheduler.gif';
import furrever from '../assets/furrever.gif';
import medley from '../assets/medley.gif';
import book_look from '../assets/book_look.gif';
import { FaGithub } from 'react-icons/fa';
// import { PopupboxManager, PopupboxContainer } from "react-popupbox";
// import "react-popupbox/dist/react-popupbox.css";


export default function Portfolio() {
    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                <div className='image-box-wrapper row row-cols-auto justify-content-center'>
                    <div className='portfolio-image-box'>
                        <figure>
                            <a href='https://serene-gorge-47802.herokuapp.com/' target={'_blank'}>
                                <img className='portfolio-image' src={book_look} alt='book_look project' />
                                <figcaption className='text-center'>Book Look <a href="https://github.com/monicadolce/Book_look" target={'_blank'}><FaGithub id="portfolio-github" className='github-icon' size={23}/></a></figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                        <figure>
                            <a href='https://monicadolce.github.io/Work_Day_Scheduler/' target={'_blank'}>
                                <img className='portfolio-image' src={scheduler} alt='scheduler project' />
                                <figcaption className='text-center'>Work Day Scheduler <a href="https://github.com/monicadolce/Work_Day_Scheduler" target={'_blank'}><FaGithub className='github-icon' size={23}/></a></figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                        <figure>
                            <a href='https://medley.herokuapp.com/' target={'_blank'}>
                                <img className='portfolio-image' src={medley} alt='medley project' />
                                <figcaption className='text-center'>Medley <a href="https://github.com/CoffeeEyes28/Medley" target={'_blank'}><FaGithub className='github-icon' size={23}/></a></figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className='portfolio-image-box'>
                        <figure>
                            <a href='https://enigmatic-gorge-61389.herokuapp.com/ 'target={'_blank'}>
                                <img className='portfolio-image' src={furrever} alt='furrever project' />
                                <figcaption className='text-center'>Furrever <a href="https://github.com/CoffeeEyes28/Furrever" target={'_blank'}><FaGithub className='github-icon' size={23}/></a></figcaption>
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
