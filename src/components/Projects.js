import React, { useEffect, useState } from "react";

import axios from "axios";
import Loader from "./Loader";
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios.get(
        "https://benjaminportfolio-v1.herokuapp.com/api"
      );
      setLoading(false);
      setProjects(data);
      console.log(data);
    };
    getData();
  }, []);
  return (
    <div className="container about">
      <h3>Major Projects</h3>
      {loading && <Loader />}
      {projects.length !== 0 &&
        projects.map((project) => (
          <div className="pt-4" key={project.id}>
            <h4>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h4>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} className="img-fluid" alt="" />
            </a>
            <p className="pt-3 description">
              {project.intro} <br />
              {project.description}
            </p>
            <div>
              <a href={project.githublink} target="_blank" rel="noreferrer">
                <button className="btn code">Code</button>
              </a>
            </div>
            <h6 className="pt-3">
              <strong>Tech Used:{project.techUsed}</strong>
            </h6>
          </div>
        ))}
    </div>
  );
}

export default Projects;
