import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProjects from "../../../src/Hooks/useProject";

const ProjectDetails = () => {
    const { _id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProject(data[_id - 1]));
    }, []);
    console.log(project);
    return (
        <div>
            <div className="py-10 mx-5 md:mx-16">
                <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
                    {project.name}
                </h2>

                {/* Technology list  */}
                <h2 className="text-2xl text-white my-5">Uses Technology</h2>
                <div className="flex gap-5 flex-wrap">
                    <span className="btn btn-info rounded-none cursor-default">
                        HTML5
                    </span>
                    <span className="btn btn-primary rounded-none cursor-default">
                        CSS3
                    </span>
                    <span className="btn btn-warning rounded-none cursor-default">
                        JavaScript
                    </span>
                    <span className="btn btn-secondary rounded-none cursor-default">
                        ReactJs
                    </span>
                    <span className="btn btn-success rounded-none cursor-default">
                        NodeJs
                    </span>
                    <span className="btn btn-accent rounded-none cursor-default">
                        Express Js
                    </span>
                    <span className="btn btn-error rounded-none cursor-default">
                        MongoDB
                    </span>
                </div>
                {/* import link  */}
                <div className="my-10">
                    <h2 className="text-2xl text-white my-5">Important Links -</h2>
                    <div className="flex gap-5 flex-wrap">
                        <a href={project.live_link} target="_blank" rel="noreferrer">
                            <button className="btn btn-outline btn-info rounded-none">
                                Live Site
                            </button>
                        </a>
                        <a href={project.git_client} target="_blank" rel="noreferrer">
                            <button className="btn btn-outline btn-warning rounded-none">
                                Github client
                            </button>
                        </a>
                        {project.git_server && (
                            <a href={project.git_server} target="_blank" rel="noreferrer">
                                <button className="btn btn-outline btn-secondary rounded-none">
                                    Github Server
                                </button>
                            </a>
                        )}
                    </div>
                </div>
                {/* Screenshot  */}
                <div className="my-10">
                    <h2 className="text-2xl text-white my-5">
                        Some Screenshot from{" "}
                        <span className="text-info">{project.name}</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-info p-3 overflow-hidden">
                            <img
                                className=" hover:scale-125 transition-all "
                                src={project.image1}
                                alt=""
                            />
                        </div>
                        <div className="bg-info p-3 overflow-hidden">
                            <img
                                className=" hover:scale-125 transition-all "
                                src={project.image2}
                                alt=""
                            />
                        </div>
                        <div className="bg-info p-3 overflow-hidden">
                            <img
                                className=" hover:scale-125 transition-all "
                                src={project.image3}
                                alt=""
                            />
                        </div>
                        <div className="bg-info p-3 overflow-hidden">
                            <img
                                className=" hover:scale-125 transition-all"
                                src={project.image4 ? project.image4 : project.image1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className="my-10">
                    <h2 className="text-2xl text-white my-5 font-bold">
                        About This Project -
                    </h2>
                    <div>
                        <p className="text-white text-md">{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
