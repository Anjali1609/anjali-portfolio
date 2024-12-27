import React from 'react';
import './stylefooter.css'

const footer = () => {
    const lin_url = 'https://www.linkedin.com/in/anjali-verma-259aa3118/';
    const git_url = "https://github.com/Anjali1609";
    const fb_url = "";
    const insta_url = "https://www.instagram.com/pyroclast_1613?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
    const twt_url = "";

    return (
        <div name="footer"
            className='w-full h-full bg-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="social bg-black">
                    <p className='m-2'>Follow me on social media</p>
                    <ul className="wrapper bg-black">
                        {/* eslint-disable-next-line */}
                        <a href={lin_url} target="_blank2" rel="noreferrer">
                            <li className="icon linkedin">
                                <span className="tooltip">LinkedIn</span>
                                <span><i className="fab fa-linkedin"></i></span>
                            </li>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a href={git_url} target="_blank" rel="noreferrer">
                            <li className="icon github">
                                <span className="tooltip">GitHub</span>
                                <span><i className="fab fa-github"></i></span>
                            </li>
                        </a>

                        {/* eslint-disable-next-line */}
                        {/* <a href={fb_url} target="_blank" rel="noreferrer" >
                            <li className="icon facebook">
                                <span className="tooltip">Facebook</span>
                                <span><i className="fab fa-facebook-f"></i></span>
                            </li>
                        </a> */}

                        {/* eslint-disable-next-line */}
                        <a href={insta_url} rel="noreferrer" target="_blank">
                            <li className="icon instagram">
                                <span className="tooltip">Instagram</span>
                                <span><i className="fab fa-instagram"></i></span>
                            </li>
                        </a>

                        {/* eslint-disable-next-line */}
                        {/* <a href={twt_url} rel="noreferrer" target="_blank">
                    <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <span><i className="fab fa-twitter"></i></span>
                    </li>
                </a> */}

                    </ul>
                </div>
                <p className='text-center'>Copyright &copy; All rights reserved
                    Designed & Developed by Ankit Kumar
                </p>
                <div className="final_text"></div>
            </div>
        </div>
    );
};

export default footer;