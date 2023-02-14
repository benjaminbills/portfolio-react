import React from 'react';
import profilePhoto from '../assets/profile.jpg';
import profilePhotoNew from '../assets/Benjamin.jpeg';

function Home() {
  return (
    <div className='container about'>
      <div className='row'>
        <div className='col-lg-4 col-md-12'>
          <img
            src={profilePhotoNew}
            className='img-fluid rounded'
            style={{ 'max-height': '400px' }}
            alt=''
          />
        </div>
        <div className='col-1'></div>
        <div className='col-lg-7 col-md-12 about-me'>
          <h3>Hi, I'm Benjamin</h3>
          <p>
            Knowledgeable Front End and Back End Developer adept at creating
            successful websites that meet customer needs. Specializing in
            collaborating with customers to gather requirements, produce plans
            and improve designs for usability and functionality.
          </p>
          <p>
            <strong>
              Skills: HTML, CSS, JAVASCRIPT, PYTHON, DJANGO, JQUERY, POSTGRESQL,
              ANGULAR, REACT
            </strong>
            <br />
            Currently learning more about Cloud
          </p>
          <a
            className='btn border btn-lg'
            href='https://drive.google.com/file/d/16V4c1YfxLcneE7VQW5jj_8BHzxt2ucdM/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
