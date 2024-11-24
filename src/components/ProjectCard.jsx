import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ card }) => {
    const { image, headline, description, github, sitelink} = card;
    return (
        <div className="p-6 rounded-lg shadow-2xl text-black max-w-sm mx-auto border">
            <div className="flex justify-center mb-4">
                <img src={image} alt="App Screenshot" className="h-[210px] w-full rounded-lg" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">{headline}</h2>
            <p className="mb-4 text-base text-justify">{description}</p>
            <div className="flex justify-start space-x-4">
                <Link to={sitelink} target="_blank" className="btn text-base bg-[#00b3f0] text-white hover:text-gray-800">Site Link</Link>
                <Link to={github} target="_blank" className="btn text-base bg-[#00d6d3] text-white hover:text-gray-800">GitHub Link</Link>
            </div>
        </div>
    );
};

export default ProjectCard;
