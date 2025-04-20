import React, { useEffect } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const ProjectCard = ({ card }) => {
    const { id, image, headline, description, github, sitelink } = card;
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);
    return (
        <div className="p-6 rounded-lg shadow-2xl text-black max-w-sm mx-auto border group">
            <div className="relative" data-aos="zoom-in">
                <div className="flex justify-center mb-4">
                    <img src={image} alt="App Screenshot" className="h-[210px] w-full rounded-lg object-cover group-hover:scale-110 transition" />
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-left mb-2">{headline}</h2>
            <p className="mb-4 text-base text-justify">{description.substring(0, 100)}....</p>
            <div className="flex justify-center gap-3">
                <Link to={sitelink} target="_blank" className="btn tn bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:text-gray-800"><FaEye className='text-2xl' /></Link>
                <Link to={github} target="_blank" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:text-gray-800"><FaGithub className='text-2xl' /></Link>
                <Link to={`/project/${id}`} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:text-red-800"><FcViewDetails className='text-3xl' /></Link>
            </div>
        </div>
    );
};

export default ProjectCard;

