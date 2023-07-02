import { Link } from "react-router-dom";
import resume from "../../../public/resume.pdf"
import { FaFilePdf } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';



function Home() {

  return (
    <>
      <div className="bg-[#FFFFF] h-full flex justify-center items-center flex-col">
        <div className="w-full px-5 sm:px-0 sm:w-[600px] h-full flex justify-center flex-col">
          <h2 className="text-lg text-[#fff] mb-2">
            I am a{" "}
            <span className=" inline-block">
              <TypeAnimation
                sequence={[
                  'Frontend Web Developer',
                  2000,
                  'Web Designer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'React Devloper',
                  2000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </span>
          </h2>
          <h1
            className="text-info text-4xl sm:text-6xl font-bold mb-4"
            data-aos="fade-up"
          >
            RAJU AHMMED
          </h1>
          <p className="text-[#9E9E9E] mb-5">
            I am a professional Frontend Developer and familiar with MERN Stack
            development. I can made any kind of extreme level fancy web
            application for you.{" "}
            <span className="text-white font-bold text-lg">
              So what are you thinking right now.?{" "}
              <span className="animate-pulse">HIRE ME..</span>
            </span>
          </p>
          <div>
            <button className="btn btn-outline btn-info border-4 rounded-none mr-5 mb-5">
              <a className="flex" href={resume} download>
                <FaFilePdf /><span className="ml-2">Download Resume</span>
              </a>
            </button>
            <Link to="/contact">
              <button className="btn btn-outline btn-info border-4 rounded-none animate-bounce hover:animate-none transition-all">
                Hire me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;