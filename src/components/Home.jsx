import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import photo from "../assets/new.jpg";

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
        console.log(container);
    };
    return (
        <div className="relative overflow-hidde min-h-[calc(100vh-208px)]">
            <div></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="rounded-full w-60 h-60 border border-gray-500 p-2" src={photo} alt="" />
                    <div><h1 className="text-5xl text-black font-bold">I&apos;m Ahasan Habib</h1></div>
                    <div className="mt-5"><p className="text-2xl text-gray-500 font-bold">Frontend Developer specializing in JavaScript.</p></div>
                    <div className="mt-2">
                        <a href="/src/assets/new.jpg" download="photo resume" className="btn bg-[#0eb4d9] border-0 text-white font-semibold text-lg">Download Resume</a>
                    </div>
                </div>
            </div>
            <div className="-z-50">
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

