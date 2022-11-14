import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>Full Stack Web Developer</h1>
            <Typewriter
            wrapperClassName='Typewriter__wrapper' 
            cursorClassName='Typewriter__cursor'
            options={{
            strings:["React","JavaScript", "Node", "CSS", "HTML", "Bootstrap", "SQL", "Mongo", "Express", "jQuery", "Moment"],
            autoStart: true,
            loop: true,
            }}
            />
        </div>
    </div>
  )
}

export default Header