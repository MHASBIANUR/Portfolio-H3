import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        loadSlim(window.tsParticles).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: false },

                background: {
                    color: "transparent",
                },

                particles: {
                    number: { value: 80 },

                    color: { value: "#ffffff" },

                    links: {
                        enable: true,
                        color: "#ffffff",
                        distance: 150,
                        opacity: 0.4,
                    },

                    move: {
                        enable: true,
                        speed: 1,
                    },

                    size: {
                        value: 3,
                    },

                    opacity: {
                        value: 1,
                    },
                },

                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",   
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 120,
                            duration: 0.4,
                        },
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.8,
                            },
                        },
                    },
                },

                detectRetina: true,
            }}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
            }}
        />
    );
}