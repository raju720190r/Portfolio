import Services from "./Services";
import resume from "../../public/resume.pdf"

function About() {

    return (
        <>
            <div>
                <div className="py-10 mx-5 md:mx-16">
                    <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
                        <i class="fa-solid fa-user-tie mr-3"></i>About Me
                    </h2>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-flow-col px-5 md:px-14 gap-8 text-white"
                    data-aos="fade-right"
                >
                    <div className=" md:col-span-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
                            Frontend Web Developer.
                        </h2>
                        <p>
                            Hi. <br />I am Md Raju Ahammed. I am a professional Frontend
                            Web Developer. Recently i have done some good project with MERN
                            technology. I also know basic of NodeJs , MongoDB , Express Js for
                            full stack. <br /> <br />
                            Now i am looking for a job where i can share my skill properly. I am
                            very handworking and determined. If you want to checkout my recent
                            project then please go to Portfolio page. Thank you for your time{" "}
                            {":)"} .
                        </p>
                    </div>
                    <div className=" md:col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-5 font-bold">
                            Personal Information
                        </h2>
                        <p>Name: Md Raju Ahammed</p>
                        <p>Age: 18 Years</p>
                        <p>Country: Bangladesh</p>
                        <p>Address: Jamalpur,Bangladesh</p>
                        <p>Email: mdrajuahmmed72018@gmail.com</p>
                        <p>Freelance: Available</p>
                        <button className="btn btn-outline btn-info border-4 rounded-none mt-8">
                            <a
                                href={resume}
                                download
                            >
                                Download Resume
                            </a>
                        </button>
                    </div>
                </div>
                <Services></Services>
            </div>
        </>
    )
}

export default About;