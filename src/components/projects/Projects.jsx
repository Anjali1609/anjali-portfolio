import React from 'react';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (

    <div name="projects" 
    className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
         <div className='pd-8'>
             <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Projects
             </p>
         </div>
            <section
            id="projects"
            className="w-full py-10 border-b-black">
            {/* <div className="flex justify-center items-center text-center">
                <Title
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects"
                />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                title="Human Activity Detection"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
                />
                <ProjectsCard
                title="Voice Typing Braille Pad"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectTwo}
                />
                <ProjectsCard
                title="Vehicle tracking system"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectThree}
                />
            </div>
            </section>
        </div>
    </div>
  );
}

export default Projects;