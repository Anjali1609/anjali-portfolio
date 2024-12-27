import React, { useEffect } from 'react';
import IIITGpic from '../assets/IIIT-Guwahati-Logo.png';
import TUBhilai from '../assets/TU_Bhilai_Logo.jpg';
import CGlogo from '../assets/bilaspur_school_logo.png';
import IITd from '../assets/iitd_logo.png';
import './education.css';

const Education = () => {
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
                threshold: 0.3, // Adjust threshold as needed
            }
        );

        const blocks = document.querySelectorAll('.education-block');
        blocks.forEach((block) => observer.observe(block));

        return () => {
            blocks.forEach((block) => observer.unobserve(block));
        };
    }, []);

    return (
        <div
            name="education"
            className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pd-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Education
                    </p>
                </div>

                {/* PhD */}
                <div className="education-block rounded-md border-solid border-4 hover:border-white bg-black shadow-lg shadow-sky-500 border-sky-500 mt-10">
                    <p className="text-xl m-10">
                        <div>
                            <img
                                src={IITd}
                                alt="IIT Delhi"
                                className="hover:animate-pulse w-20 m-3 mx-auto md:w-1/7"
                            />
                        </div>
                        <div className="rounded-md border-solid border-4 hover:border-white bg-teal-300 border-sky-500 mt-10">
                            <h1 className="text-2xl font-extrabold text-black m-2 text-center">
                                Indian Institute of Technology Delhi (IITD)
                            </h1>
                        </div>
                        <li className="text-gray-400 mt-3">Doctor of Philosophy (Ph.D.)</li>
                        <li className="text-gray-400">
                            Department: The Centre for Applied Research in Electronics (CARE)
                        </li>
                        <li className="text-gray-400">Grade: _ (Update Soon)</li>
                        <li className="text-gray-400">Ph.D. Year: 2025-30</li>
                    </p>
                </div>

                {/* MTech */}
                <div className="education-block rounded-md border-solid border-4 hover:border-white bg-black shadow-lg shadow-sky-500 border-sky-500 mt-10">
                    <p className="text-xl m-10">
                        <div>
                            <img
                                src={IIITGpic}
                                alt="IIIT Guwahati"
                                className="hover:animate-pulse w-20 m-3 mx-auto md:w-1/7"
                            />
                        </div>
                        <div className="rounded-md border-solid border-4 hover:border-white bg-teal-300 border-sky-500 mt-10">
                            <h1 className="text-2xl font-extrabold text-black m-2 text-center">
                                Indian Institute of Information Technology Guwahati (IIITG)
                            </h1>
                        </div>
                        <li className="text-gray-400 mt-3">
                            Master of Technology (M.Tech) in Communication and Signal Processing
                        </li>
                        <li className="text-gray-400">
                            Department of Electronics and Communication Engineering
                        </li>
                        <li className="text-gray-400">Grade: 7.7</li>
                        <li className="text-gray-400">Post-Graduation Year: 2022-24</li>
                    </p>
                </div>

                {/* B.E. */}
                <div className="education-block rounded-md border-solid border-4 hover:border-white bg-black shadow-lg shadow-sky-500 border-sky-500 mt-10">
                    <p className="text-xl m-10">
                        <div>
                            <img
                                src={TUBhilai}
                                alt="Shri Shankaracharya College"
                                className="hover:animate-pulse rounded-2xl w-20 m-3 mx-auto md:w-1/7"
                            />
                        </div>
                        <div className="rounded-md border-solid border-4 hover:border-white bg-teal-300 border-sky-500 mt-10">
                            <h1 className="text-2xl font-extrabold text-black m-2 text-center">
                                Shri Shankaracharya College of Engineering
                            </h1>
                        </div>
                        <li className="text-gray-400 mt-3">Bachelor of Engineering (B.E.)</li>
                        <li className="text-gray-400">
                            Department of Electronics and Telecommunication Engineering
                        </li>
                        <li className="text-gray-400">Grade: 7.7</li>
                        <li className="text-gray-400">Graduation Year: 2014-18</li>
                    </p>
                </div>

                {/* Higher Secondary */}
                <div className="education-block rounded-md border-solid border-4 hover:border-white bg-black shadow-lg shadow-sky-500 border-sky-500 mt-10">
                    <p className="text-xl m-10">
                        <div>
                            <img
                                src={CGlogo}
                                alt="Higher Secondary"
                                className="hover:animate-pulse w-20 m-3 mx-auto md:w-1/7"
                            />
                        </div>
                        <div className="rounded-md border-solid border-4 hover:border-white bg-teal-300 border-sky-500 mt-10">
                            <h1 className="text-2xl font-extrabold text-black m-2 text-center">
                                S. E. C. Railway Mixed Higher Secondary School
                            </h1>
                        </div>
                        <li className="text-gray-400 mt-3">Higher Secondary</li>
                        <li className="text-gray-400">
                            Specialized in Physics, Chemistry, Maths, and Computer Science
                        </li>
                        <li className="text-gray-400">Percentage: 53.4</li>
                        <li className="text-gray-400">HS Year: 2012-14</li>
                    </p>
                </div>

                {/* Secondary */}
                <div className="education-block rounded-md border-solid border-4 hover:border-white bg-black shadow-lg shadow-sky-500 border-sky-500 mt-10">
                    <p className="text-xl m-10">
                        <div>
                            <img
                                src={CGlogo}
                                alt="Secondary School"
                                className="hover:animate-pulse w-20 m-3 mx-auto md:w-1/7"
                            />
                        </div>
                        <div className="rounded-md border-solid border-4 hover:border-white bg-teal-300 border-sky-500 mt-10">
                            <h1 className="text-2xl font-extrabold text-black m-2 text-center">
                                S. E. C. Railway Mixed Higher Secondary School
                            </h1>
                        </div>
                        <li className="text-gray-400 mt-3">Secondary School</li>
                        <li className="text-gray-400">
                            Specialized in Science, Social Science, Mathematics, Hindi, English
                        </li>
                        <li className="text-gray-400">Grade: 7.8</li>
                        <li className="text-gray-400">SSC Year: 2010-12</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;
