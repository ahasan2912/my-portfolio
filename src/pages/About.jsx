import React, { useState } from 'react';
import photo from '../assets/ahasan.jpg'
import { FaArrowAltCircleRight, FaBootstrap, FaEye, FaGithub, FaHeart, FaNodeJs, FaReact } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { RxActivityLog } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiHostinger } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
const About = () => {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg md:mt-32">
            {/* Left Section: Image */}
            <div className="w-full md:w-1/3">
                <img
                    src={photo} // Replace this URL with your uploaded image
                    alt="Profile"
                    className="rounded-md shadow-lg h-full object-cover hover:border-8 border-[#FFA07A] duration-500 ease-linear hover:transition"
                />
            </div>

            {/* Right Section: Content */}
            <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
                <p className="text-gray-600 mb-4 text-justify">
                    I believe my passion for learning constantly drives me to explore new horizons. With a deep curiosity about technology, I am currently delving into the world of web technologies, though my professional journey began in the software service industry.
                </p>
                <p className="text-gray-600 mb-4 text-justify">
                    Each day is a journey of discovery, where books and writing fuel my creativity and offer fresh perspectives. Inspired by diverse stories of people, I view coding as more than a profession—it’s a medium for meaningful creation and problem-solving. My passion for learning drives me to explore, innovate, and embrace the endless pursuit of knowledge
                </p>
                {/* Tabs */}
                <div className="tabs bg-gray-100 shadow-xl py-2 flex justify-between px-10 ">
                    <div className='flex flex-col items-center justify-center'>
                        <FaEye className={`text-2xl ${activeTab === "skills" ? "tab-active text-[#3f51b5]" : ""}`}
                            onClick={() => setActiveTab("skills")} />
                        <button
                            className={`tab tab-bordered text-lg font-semibold  ${activeTab === "skills" ? "tab-active text-[#3f51b5]" : ""}`}
                            onClick={() => setActiveTab("skills")}>SKILLS
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <MdCastForEducation className={`text-2xl ${activeTab === "education" ? "tab-active text-[#3f51b5]" : ""}`}
                            onClick={() => setActiveTab("education")} />
                        <button
                            className={`tab tab-bordered text-lg font-semibold ${activeTab === "education" ? "tab-active text-[#3f51b5]" : ""
                                }`}
                            onClick={() => setActiveTab("education")}
                        >EDUCATION
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {activeTab === "skills" && (
                        <div className=''>
                            <h2 className="text-xl font-bold mb-2">Skills</h2>
                            <div className='border my-2'></div>
                            <ul className="flex flex-col md:flex-row gap-5 md:gap-16">
                                <div>
                                    <li className="flex items-center gap-1">
                                        <FaReact size={22} />
                                        <span className='text-lg'> React js</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <FaNodeJs size={22} />
                                        <span className='text-lg'> Node js(basic)</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <DiMongodb size={24} />
                                        <span className='text-lg'> MongoDB</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <RiTailwindCssFill size={22} />
                                        <span className='text-lg'> Tailwind CSS</span>
                                    </li>
                                </div>
                                <div>
                                    <li className="flex items-center gap-1">
                                        <FaBootstrap size={22} />
                                        <span className='text-lg'> Bootstrap CSS</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <IoLogoFirebase size={22} />
                                        <span className='text-lg'> Firebase Authentication</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <FaGithub size={22} />
                                        <span className='text-lg'>Git & GitHub Collaboration</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <SiHostinger />
                                        <span className='text-lg'>Netlify, Surge & Vercel</span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    )}
                    {/* Tab Content */}
                    {activeTab === "education" && (
                        <div>

                            <div className='flex flex-col md:flex-row justify-between'>
                                <div className='w-full md:w-1/2'>
                                    <h2 className="text-xl font-bold mb-2">Education</h2>
                                    <p>BSc in Computer Science and Engineering</p>
                                    <p>Daffodil International University (2021-2025)</p>
                                    <p>SCGPA: 3.53</p>
                                    <h2 className="text-xl font-bold mt-1">Activies</h2>
                                    <p><span className='font-semibold text-base'># </span>Volunteers of the ICPC Regional Programming Contest at DIU
                                    </p>
                                    <p><span className='font-semibold text-base'># </span>Participate Art of Living Seminar at DIU
                                    </p>
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <h1 className='text-xl font-bold my-1'>Achievements</h1>
                                    <p><span className='font-semibold text-base'># </span>Associate Member at DIU Computer and Programming Club (CPC)
                                    </p>
                                    <p><span className='font-semibold text-base'># </span>Take of Programming Contest DIU Ranking 11th
                                        (12/2021) <Link to='https://toph.co/c/diu-take-off-2021/standings' target="_blank" className='text-blue-500'>link...</Link>
                                    </p>
                                    <p><span className='font-semibold text-base'># </span>Take of Programming Contest DIU Ranking 96th
                                        (04/2022) <Link to='https://toph.co/c/diu-take-off-2022/standings' target="_blank" className='text-blue-500'>link...</Link>
                                    </p>
                                    <p><span className='font-semibold text-base'># </span>Unlock the Algorithm Programming Conteset DIU
                                        Ranking 46th (04/2023) <Link to='https://toph.co/c/unlock-the-algorithm-spring-2023/standings' target="_blank" className='text-blue-500'>link...</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;