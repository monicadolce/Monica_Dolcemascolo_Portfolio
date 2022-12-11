import React from 'react';



export default function Resume () {
  return (
    <div id="experience" className="experience">
    <div className="d-flex justify-content-center my-5">
    <a href='https://docs.google.com/document/d/1ViHRihkUMRMSbhCe9cTP-CL1j7KGrHGfeift-8xNydA/edit?usp=sharing'><h1 id= 'experience-link' className='resume-text'>Experience</h1></a>
    </div>
    <div className="container experience-wrapper">
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2020-2021</h3>
          <h5>Law Enforcement Officer</h5>
          <p>Served and protected New Yorkers and visitors of the New York City Metropolitan Area during challenging times with empathy, critical thinking and above all, positive interaction with the community.</p>
        </div>
      </div>
      {/* - */}
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2015-2020</h3>
          <h5>Transportation Security Officer</h5>
          <p>Provided security and protection of air travelers, airports and aircraft in a courteous and professional manner.</p>
        </div>
      </div>
      {/* - */}
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2014-2015</h3>
          <h5>Office Administrator</h5>
          <p>Responsible for the procurement of information technology equipment/systems and responsible for the procurement of professional and technical services.</p>
        </div>
      </div>
      {/* - */}
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2013-2014</h3>
          <h5>English as a Second Language Teacher</h5>
          <p>Prepared and taught daily English as a second language lessons to students from all over the world.</p>
        </div>
      </div>
      {/* - */}
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2010-2013</h3>
          <h5>English as a Second Language Teacher</h5>
          <p>Prepared and taught daily English as a second language lessons to Italian students.</p>
        </div>
      </div>
      {/* - */}
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>... to be continued</h3>
          <h5>Learn more about me!</h5>
          <p id= 'resume-link' className='resume link'><a href='https://docs.google.com/document/d/1ViHRihkUMRMSbhCe9cTP-CL1j7KGrHGfeift-8xNydA/edit?usp=sharing'>Click here to go to my resume and find out about my skills, education, certifications and more!</a></p>
        </div>
      </div>
    </div>
  </div>
)

}
