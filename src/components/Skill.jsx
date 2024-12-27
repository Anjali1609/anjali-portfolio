import React, { useEffect } from 'react';
import './skillstyle.css';

const Skill = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        const skillElements = document.querySelectorAll('.skill');
        skillElements.forEach((element) => observer.observe(element));

        return () => {
            skillElements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <div
            name="skill"
            className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pd-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Skills
                    </p>
                </div>

                {/* Programming Skills */}
                <div className="skills-section mt-10">
                    <h2 className="text-2xl font-bold text-teal-400 mb-5">Programming</h2>
                    <div className="skills">
                        <div className="skill" id="python">
                            <div>
                                <span className="title">Python</span>
                                <span className="float-right text-sm mt-2 font-bold">70%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="matlab">
                            <div>
                                <span className="title">Matlab</span>
                                <span className="float-right text-sm mt-2 font-bold">60%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="cl">
                            <div>
                                <span className="title">C</span>
                                <span className="float-right text-sm mt-2 font-bold">60%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="cpp">
                            <div>
                                <span className="title">C++</span>
                                <span className="float-right text-sm mt-2 font-bold">40%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skills */}
                    <h2 className="text-2xl font-bold text-teal-400 mt-10 mb-5">Technical Skills</h2>
                    <div className="skills">
                        <div className="skill" id="kom">
                            <div>
                                <span className="title">Microcontrollers</span>
                                <span className="float-right text-sm mt-2 font-bold">50%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="micro">
                            <div>
                                <span className="title">Microprocessors</span>
                                <span className="float-right text-sm mt-2 font-bold">50%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="os">
                            <div>
                                <span className="title">Real-time Operating Systems</span>
                                <span className="float-right text-sm mt-2 font-bold">40%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="de">
                            <div>
                                <span className="title">Digital Electronics</span>
                                <span className="float-right text-sm mt-2 font-bold">50%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="uvm">
                            <div>
                                <span className="title">Wireless Communication</span>
                                <span className="float-right text-sm mt-2 font-bold">60%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="hdl">
                            <div>
                                <span className="title">Signal Processing</span>
                                <span className="float-right text-sm mt-2 font-bold">50%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>

                    {/* Miscellaneous Skills */}
                    <h2 className="text-2xl font-bold text-teal-400 mt-10 mb-5">Miscellaneous</h2>
                    <div className="skills">
                        <div className="skill" id="windows">
                            <div>
                                <span className="title">Windows</span>
                                <span className="float-right text-sm mt-2 font-bold">40%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="latex">
                            <div>
                                <span className="title">LATEX (Overleaf)</span>
                                <span className="float-right text-sm mt-2 font-bold">80%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="mo">
                            <div>
                                <span className="title">Microsoft Office</span>
                                <span className="float-right text-sm mt-2 font-bold">90%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="github">
                            <div>
                                <span className="title">GitHub</span>
                                <span className="float-right text-sm mt-2 font-bold">50%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="skill" id="ps">
                            <div>
                                <span className="title">Problem Solving</span>
                                <span className="float-right text-sm mt-2 font-bold">40%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
