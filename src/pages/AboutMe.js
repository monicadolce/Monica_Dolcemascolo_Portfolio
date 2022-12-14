import React from 'react';
import author from '../assets/profile.png';

export default function AboutMe() {
  return (
    <div id= 'about' className='container'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>About me</h1>
          <p className='about-paragraph'>
            Hello! I'm Monica and I'm so glad you decided to take a look at my page!

            I'm a Full Stack Web Developer with a background in Education, Civil Service and life-long dedication to learning. 

            I like to combine creativity and problem solving to develop user-friendly applications.
            
            I get my inspiration from the world around me which is rich in beauty and has so much to offer when creating a web page.

            When I'm not behind the screen, I'm either out and about with my dogs, hiking, traveling, snowboarding, scuba diving, or experimenting in the kitchen!
          </p>
        </div>
      </div>
    </div>
  )
}
