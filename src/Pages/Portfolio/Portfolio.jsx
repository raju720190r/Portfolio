import React, { useEffect, useState } from "react";
import Projects from "./Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info mb-10">
          <i class="fa-solid fa-briefcase-medical mr-3"></i>My recent work
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Projects key={project._id} project={project}></Projects>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;