import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contact() {
  const email = useRef('');
  const name = useRef('');
  const message = useRef('');

  const [resMessage, setResMessage] = useState('');
  const submitFormHandler = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      axios
        .post(
          'https://benjaminportfolio-v1.herokuapp.com/api/email',
          {
            name: name.current.value,
            message: message.current.value,
            email: email.current.value,
          },
          config
        )
        .then((response) => {
          setResMessage(response.data.detail);
        });
    } catch (error) {
      setResMessage(error.detail);
    }
  };
  return (
    <div>
      <div className='container about'>
        <div className='row'>
          <div className='col-lg-8 col-md-12 pb-4 work'>
            <h3>Want to work with me?</h3>
            <p>
              I am meticulous about deliverying good web application.
              <br />I am skilled in using client side technologies, HTML, CSS,
              Javascript, REACT and Python(Django) for server side.
            </p>
            <p>
              Do you need a frontend developer or a backend developer? <br />I
              am currently available for gigs or fulltime jobs. You can{' '}
              <a className='highlight' href='mailto:obafemibenjamins@gmail.com'>
                send me an email
              </a>{' '}
              or send a message through the form
            </p>
            <div className='handles pt-3'>
              <h3>Links</h3>
              <div className='links'>
                <a
                  href='https://twitter.com/Benjaminobafem1'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-twitter'></i>
                </a>
                <a
                  href='https://github.com/benjaminbills'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-github'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/benjamin-obafemi-a896b314b/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-linkedin'></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className='col-lg-8 col-md-12 ml-auto'>
            <div className='container form'>
              <form onSubmit={submitFormHandler}>
                {resMessage && <p>{resMessage}</p>}
                <div className='mb-3'>
                  <label htmlFor='name'>Name</label>
                  <input
                    className='form-control'
                    required
                    type='text'
                    ref={name}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control'
                    required
                    type='email'
                    ref={email}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='message'>Your message</label>
                  <textarea
                    className='form-control'
                    required
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    ref={message}
                  ></textarea>
                </div>
                <div className='d-grip gap-2'>
                  <button className='btn submit' type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
