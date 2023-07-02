import React from "react";
import { Link } from "react-router-dom";
import style from "./ProjectStyle.css";

const Projects = ({ project }) => {
  const { name, _id, image1 } = project;
  return (
    <div className={`${style.projects}`}>
      <img src={image1} alt="" className={`${style.projects_image}`} />
      <div className={`${style.projects_title}`}>
        <div className="text-center">
          <h2 className="text-2xl mb-5">{name}</h2>
          <Link to={`/projectDetails/${_id}`}>
            <button className="btn btn-outline btn-info rounded-none uppercase">
              Project Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;