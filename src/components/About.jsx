import React from 'react';

const About = () => {
    return (
        <div name="about"
            className='w-full h-full bg-gradient-to-b from-black via-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pd-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    <p>
                        I am Anjali Verma, currently pursuing a Ph.D. at the Indian Institute of Technology Delhi (IITD) within The Centre for Applied Research in Electronics (CARE). I hold a Master’s degree in Communication and Signal Processing from IIIT Guwahati and a Bachelor’s in Electronics and Telecommunication Engineering.
                    </p>
                    <br />
                    <p className='text-xl'>
                        My academic and research pursuits are driven by a strong interest in advancing technologies in communication systems, signal processing, and embedded systems. My current research focuses on developing innovative methodologies to improve wireless communication efficiency and network performance.
                    </p>
                    <br />
                    <p className='text-xl'>
                        With a commitment to continuous learning and excellence, I aim to make meaningful contributions to the field of electronics and communication through impactful research and innovation.
                    </p>
                </p>
            </div>
        </div>

    );

};

export default About;