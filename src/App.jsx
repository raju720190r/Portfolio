
import './App.css'
import Home from './Pages/Home/Home'
import logo from './assets/pic.jpg'
import { Link, Outlet } from 'react-router-dom'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaHome,FaLaptopCode,FaFilePdf,FaUser,FaTelegramPlane } from 'react-icons/fa';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-slate-800 text-white  p-4 w-56 h-full text-base-content">
            {/* Sidebar content here */}
            <div className='mx-5 text-xl'>
              <li>
                <div className='avatar mx-auto'>
                  <div className='w-32 rounded-full'>
                    <img className='rounded-xl' src={logo} alt="" />
                  </div>
                </div>
              </li>
              <li><Link to={'/'}><FaHome/>Home</Link></li>
              <li><Link to={'portfolio'}><FaLaptopCode/>Portfolio</Link></li>
              <li><Link to={'resume'}><FaFilePdf/>Resume</Link></li>
              <li><Link to={'about'}><FaUser/>About</Link></li>
              <li><Link to={'contact'}><FaTelegramPlane/>Contact</Link></li>
            </div>

          </ul>

        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 8,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#03a5fc",
            },
            links: {
              color: "#03a5fc",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
}

export default App
