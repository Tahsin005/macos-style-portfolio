import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };

    useGSAP(() => {
        Draggable.create(".folder");
    }, []);

    return (
        <section id="home">
            <ul>
                {projects.map((project, index) => {
                    const column = Math.floor(index / 5);
                    const row = index % 5;
                    const top = row * 110 + 20; 
                    const left = column * 140 + 20; 

                    return (
                        <li
                            key={project.id}
                            className="group folder w-32"
                            style={{ top: `${top}px`, left: `${left}px` }}
                            onClick={() => handleOpenProjectFinder(project)}
                        >
                            <img src="/images/folder.png" alt={project.name} />
                            <p>{project.name}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Home;
