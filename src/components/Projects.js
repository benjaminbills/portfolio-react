import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Loader from './Loader';
function Projects() {
  const initialProject = [
    {
      id: '1',
      link: 'https://www.infinitydevices.co/',
      title: 'Infinity Device web application',
      githublink: 'https://github.com/benjaminbills/infinity_device_next_app',
      techUsed: 'React, Next JS, Chakra UI',
      image:
        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1676362163/Portfolio/project_photos/Screen_Shot_2023-02-14_at_11.07.01_v0tcbc.png',
    },
    {
      id: '2',
      link: 'https://theroombenja.web.app/',
      title: 'Landing Page For The Room',
      githublink: 'https://github.com/benjaminbills/room',
      techUsed: 'React JS, Tailwind CSS, Javascript',
      image:
        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1676363543/Portfolio/project_photos/Screen_Shot_2023-02-14_at_11.32.05_o8t2jc.png',
    },

    {
      id: '3',
      link: 'https://react-multipart-form.web.app/',
      title: 'React Multi-step Form',
      githublink: 'https://github.com/benjaminbills/multistep-forms',
      techUsed: 'React JS, Tailwind CSS, Javascript',
      image:
        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1676363038/Portfolio/project_photos/Screen_Shot_2023-02-14_at_11.23.37_bfmaem.png',
    },
    {
      id: '4',
      link: 'https://dreamy-mahavira-cfce8c.netlify.app/',
      title: 'CSS Shadow Generator',
      githublink: 'https://github.com/benjaminbills/soft-ui-gradient-gen',
      techUsed: 'CSS, Javascript, JQuery',
      image:
        'https://res.cloudinary.com/dd2y96zp9/image/upload/v1623843260/Portfolio/project_photos/Screenshot_from_2021-06-16_14-27-36_pttrzl.png',
    },
  ];
  const [projects, setProjects] = useState(initialProject);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   const getData = async () => {
  //     const { data } = await axios.get(
  //       "https://benjaminportfolio-v1.herokuapp.com/api"
  //     );
  //     setLoading(false);
  //     setProjects(data);
  //     console.log(data);
  //   };
  //   getData();
  // }, []);
  return (
    <div className='container about'>
      <h3>Major Projects</h3>
      {/* {loading && <Loader />} */}
      {projects.length !== 0 &&
        projects.map((project) => (
          <div className='pt-4' key={project.id}>
            <h4>
              <a href={project.link} target='_blank' rel='noreferrer'>
                {project.title}
              </a>
            </h4>
            <a href={project.link} target='_blank' rel='noreferrer'>
              <img src={project.image} className='img-fluid' alt='' />
            </a>
            <p className='pt-3 description'>
              {project.intro} <br />
              {project.description}
            </p>
            <div>
              <a href={project.githublink} target='_blank' rel='noreferrer'>
                <button className='btn code'>Code</button>
              </a>
            </div>
            <h6 className='pt-3'>
              <strong>Project Stack: {project.techUsed}</strong>
            </h6>
          </div>
        ))}
    </div>
  );
}

export default Projects;
