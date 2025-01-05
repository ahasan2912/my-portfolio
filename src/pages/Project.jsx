import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { Helmet } from 'react-helmet-async';

const Project = () => {
    const data = useLoaderData();
    return (
        <div className='mt-16 flex flex-col justify-center items-center text-center'>
            <Helmet>
                <title>Ahasan's World | Projects</title>
            </Helmet>
            <div className='space-y-1 px-2'>
                <h1 className='text-4xl sm:text-5xl font-semibold'>My Recent Works</h1>
                <p className='text-base sm:text-lg'>Here are a few projects I've worked on recently.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4'>
                {
                    data.map(card => <ProjectCard key={card.id} card={card}></ProjectCard>)
                }
            </div>
            <div className='mt-8 pb-10'>
                <Link to="https://github.com/ahasan2912" target='_blank' className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base hover:bg-black px-10">See More Project</Link>
            </div>
        </div>
    );
};

export default Project;

