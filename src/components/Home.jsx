import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import photo from "../assets/new.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <div className="relative overflow-hidde min-h-screen">
            <Helmet>
                <title>Ahasan's World | Home</title>
            </Helmet>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-full">
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 text-center px-2">
                    <img className="rounded-full w-60 h-60 border border-gray-500 p-2" src={photo} alt="" />
                    <div>
                        <h1 className="text-5xl text-black font-bold text-center">Welcome Ahasan's World</h1>
                    </div>
                    <div className="mt-1">
                        <TypeAnimation
                            className="text-xl text-gray-500 font-bold text-center"
                            sequence={[

                                'Frontend Developer Specializing in React js.',
                                1000,
                            ]}
                            speed={40}
                            style={{ fontSize: '1.5em' }}
                        />
                    </div>
                    <div className="">
                        <a href="Ahasan's Resume.pdf" download="Ahasan'sResume.pdf" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base hover:bg-black">Download Resume</a>
                    </div>
                </div>
            </div>
            <div className="">
                {init && <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#FFFFFF00",
                            },
                        },
                        fpsLimit: 120,
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    area: 800
                                }
                            },
                            color: {
                                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
                            },
                            shape: {
                                type: "circle"
                            },
                            opacity: {
                                value: 1
                            },
                            size: {
                                value: { min: 1, max: 8 }
                            },
                            links: {
                                enable: true,
                                distance: 150,
                                color: "#808080",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 5,
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: "out"
                            }
                        },
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                }
                            },
                            modes: {
                                grab: {
                                    distance: 140,
                                    links: {
                                        opacity: 1
                                    }
                                },
                                push: {
                                    quantity: 4
                                }
                            }
                        }
                    }} />
                }
            </div>
        </div>
    );
};

export default Home;

