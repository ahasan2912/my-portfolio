import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        const singleData = data.find(pro => pro.id == id);
        setProject(singleData)
    }, [data, id]);
    const { image, headline, description, github, sitelink, technologies } = project;
    return (
        <div className='max-w-6xl mx-auto px-3'>
            <div className='border flex flex-col lg:flex-row justify-center my-10 md:my-24 lg:my-32 gap-5 p-5 rounded-md'>
                <div className='lg:w-1/2'>
                    <img className='w-full h-full object-cover rounded-lg' src={image} alt="" />
                </div>
                <div className='space-y-2 lg:w-1/2'>
                    <h1 className='text-2xl sm:text-3xl font-semibold'>{headline}</h1>
                    <div className='divider'></div>
                    <p className='text-base text-justify'><span className='font-semibold'>Description:</span> {description}</p>
                    <p className='text-base text-justify'></p>
                    <div className='divider'></div>
                    <div>
                        <h1 className='text-xl sm:text-2xl font-semibold mb-3'>Used Technologies</h1>
                        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3'>
                            {
                                technologies?.map((skill, idx) => <div key={idx} className='border rounded-md px-2 py-2 text-center font-semibold hover:bg-gray-400 hover:text-white'>{skill}</div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;