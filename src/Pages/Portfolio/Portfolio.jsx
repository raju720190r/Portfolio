import React, { useEffect, useState } from "react";
import style from "./Projects.module.css"

const Portfolio = () => {

    return (
        <div>
            <div className="py-10 mx-5 md:mx-16">
                <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info mb-10">
                    <i class="fa-solid fa-briefcase-medical mr-3"></i>My recent work
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* First Project */}
                    <div className={`${style.projects}`}>
                        <img src="https://i.ibb.co/SKhcChL/New-Project-3.png" alt="" className={`${style.projects_image}`} />
                        <div className={`${style.projects_title}`}>
                            <div className="text-center">
                                <h2 className="text-2xl mb-5">LEARNING SCHOOL</h2>

                                <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-raju720190r" target="_blank"><button className="btn btn-outline btn-warning rounded-none uppercase">
                                    Github Client
                                </button></a>
                                <a href="https://lschool-223b1.web.app/" target="_blank"><button className="btn btn-outline btn-info rounded-none uppercase">
                                    Live Site
                                </button></a>
                                <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-raju720190r" target="_blank"> <button className="btn btn-outline btn-secondary rounded-none uppercase">
                                    Github Server
                                </button></a>
                            </div>
                        </div>
                        <h2 className="text-2xl text-center text-white my-5">Uses Technology</h2>
                        <div className="flex gap-5 justify-center flex-wrap">
                            <span className="btn btn-green rounded-none cursor-default">
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
                    </div>
                    {/* Secound Project */}
                    <div className={`${style.projects}`}>
                        <img src="https://i.ibb.co/gz3KK4m/New-Project.png" alt="" className={`${style.projects_image}`} />
                        <div className={`${style.projects_title}`}>
                            <div className="text-center">
                                <h2 className="text-2xl mb-5">UNIQUE TOY</h2>

                                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-raju720190r" target="_blank"><button className="btn btn-outline btn-warning rounded-none uppercase">
                                    Github Client
                                </button></a>
                                <a href="https://toys-store-92729.web.app/" target="_blank"><button className="btn btn-outline btn-info rounded-none uppercase">
                                    Live Site
                                </button></a>
                                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-raju720190r" target="_blank"> <button className="btn btn-outline btn-secondary rounded-none uppercase">
                                    Github Server
                                </button></a>
                            </div>
                        </div>
                        <h2 className="text-2xl text-center text-white my-5">Uses Technology</h2>
                        <div className="flex gap-5 justify-center flex-wrap">
                            <span className="btn btn-green rounded-none cursor-default">
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
                    </div>
                    {/* Third Project */}
                    <div className={`${style.projects}`}>
                        <img src="https://i.ibb.co/9rVjCdw/New-Project-1.png" alt="" className={`${style.projects_image}`} />
                        <div className={`${style.projects_title}`}>
                            <div className="text-center">
                                <h2 className="text-2xl mb-5">MR&MRS CHEF</h2>

                                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-raju720190r" target="_blank"><button className="btn btn-outline btn-warning rounded-none uppercase">
                                    Github Client
                                </button></a>
                                <a href="https://verdant-raindrop-55e395.netlify.app/" target="_blank"><button className="btn btn-outline btn-info rounded-none uppercase">
                                    Live Site
                                </button></a>
                                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-raju720190r" target="_blank"> <button className="btn btn-outline btn-secondary rounded-none uppercase">
                                    Github Server
                                </button></a>
                            </div>
                        </div>
                        <h2 className="text-2xl text-center text-white my-5">Uses Technology</h2>
                        <div className="flex gap-5 justify-center flex-wrap">
                            <span className="btn btn-green rounded-none cursor-default">
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
                            
                        </div>
                    </div>
                    {/* Fourth Project */}
                    <div className={`${style.projects}`}>
                        <img src="https://i.ibb.co/3f1sJzK/Screenshot-2.png" alt="" className={`${style.projects_image}`} />
                        <div className={`${style.projects_title}`}>
                            <div className="text-center">
                                <h2 className="text-2xl mb-5">MR&MRS CHEF</h2>

                                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-raju720190r" target="_blank"><button className="btn btn-outline btn-warning rounded-none uppercase">
                                    Github Client
                                </button></a>
                                <a href="https://helpful-tulumba-519bfd.netlify.app/" target="_blank"><button className="btn btn-outline btn-info rounded-none uppercase">
                                    Live Site
                                </button></a>
                                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-raju720190r" target="_blank"> <button className="btn btn-outline btn-secondary rounded-none uppercase">
                                    Github Server
                                </button></a>
                            </div>
                        </div>
                        <h2 className="text-2xl text-center text-white my-5">Uses Technology</h2>
                        <div className="flex gap-5 justify-center flex-wrap">
                            <span className="btn btn-green rounded-none cursor-default">
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;