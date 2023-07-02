
function Resume() {

    return (
        <>
            <div>
                <div className="py-10 mx-5 md:mx-16">
                    <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
                        <i class="fa-solid fa-trophy mr-5"></i>Resume
                    </h2>
                </div>
                <div
                    className="grid lg:grid-cols-2 lg:pt-10 pb-10 mx-5 md:mx-16 text-white gap-10"
                    data-aos="fade-left"
                >
                    <div>
                        <h2 className="text-xl text-center uppercase border-b-2 inline-block mb-5">
                            education
                        </h2>
                        <div>
                            <ul class="steps steps-vertical">
                                <li class="step step-primary">
                                    <p className="text-left flex flex-col my-10">
                                        <span className="text-2xl font-bold">S.S.C</span>
                                        <span className="text-gray-500">
                                            Mamun Smrity Public High School
                                        </span>
                                        <span>Passing Year: 2020</span>
                                        <span>Result: GPA-5</span>
                                    </p>
                                </li>
                                <li class="step step-primary">
                                    <p className="text-left flex flex-col my-10">
                                        <span className="text-2xl font-bold">
                                            Diplolma in computer Technology
                                        </span>
                                        <span className="text-gray-500">
                                            Brahmanbaria Polytechnic Institute
                                        </span>
                                        <span>Session: 2020-2021</span>
                                        <span>Status: Running</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between lg:grid grid-cols-2">
                        <div>
                            <h2 className="text-xl text-center uppercase border-b-2 inline-block mb-5">
                                expertise
                            </h2>
                            <div>
                                <ul class="steps steps-vertical">
                                    <li class="step step-primary">HMTL5</li>
                                    <li class="step step-primary">CSS3</li>
                                    <li class="step step-primary">Bootstrap</li>
                                    <li class="step step-primary">Tailwind CSS</li>
                                    <li class="step step-primary">JavaScript</li>
                                    <li class="step step-primary">ReactJs</li>
                                    <li class="step step-primary">React Router</li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl text-center uppercase border-b-2 inline-block mb-5">
                                Confortable
                            </h2>
                            <div>
                                <ul class="steps steps-vertical">
                                    <li class="step step-primary">Firebase</li>
                                    <li class="step step-primary">React Hook Form</li>
                                    <li class="step step-primary">Node</li>
                                    <li class="step step-primary">Express Js</li>
                                    <li class="step step-primary">MongoDB</li>
                                    <li class="step step-primary">Github</li>
                                    <li class="step step-primary">Dev Tool</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;