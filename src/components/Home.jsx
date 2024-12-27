import React from 'react'
import HeroImage from '../assets/Anjali.jpg';
import PglaImage from '../assets/Anjali_profile_pic.jpeg';
import './home.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import { useCallback } from "react";
import particlesConfig from "./config/particles-config";

const Home = () => {
    const particlesInit = useCallback(async (engine) => {

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0"
                }}
                params={particlesConfig}
            />
            <div name="home"
                className='flex h-full w-full'>
                <div className='max-h-full-lg max-w-screen-lg pt-10 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10'>
                    <div className='flex flex-col mr-5 pt-10 justify-center h-full'>

                        {/* <h2 className='text-4xl sm:text-7xl pt-3 font-Bold font-signature text-white'>
                    I'm a CSP student......
                </h2> */}
                        <div className='wrapper'>
                            <span className='first-text sm:text-5xl text-4xl font-signature'>I'm</span>
                            <ul className='sec-texts text-4xl sm:text-5xl font-signature'>
                                <li><span>a Ph.D. Scholar</span></li>
                                <li><span>an Explorer</span></li>
                                <li><span>a Researcher</span></li>
                                <li><span>a Traveller</span></li>
                            </ul>
                        </div>
                        <p className='text-gray-500 py-4 max-w-md'>
                            Ph.D. scholar at IIT Delhi, passionate about communication systems, signal processing, and innovative technologies.
                        </p>
                        {/* <div>
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                Blog
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>
                        </div> */}
                    </div>
                    <div>
                        <img
                            src={PglaImage} alt="my profile"
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;