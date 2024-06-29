import ProjectCard from "../components/ProjectCard";
const Projects = () => {
    const projects = [
        {
            title: "Chat App",
            src: "/chat-app.png",
            description: "",
            link: "https://chat-app-swart-psi.vercel.app/",
            github: "https://github.com/JaiSwarup/chat-app"
        },
        {
            title: "Weather App",
            src: "/weather-app.png",
            description: "",
            link: "https://jaiswarup.github.io/weatherapp.github.io/",
            github: "https://github.com/JaiSwarup/weatherapp.github.io"
        },
        {
            title: "Discord Bot",
            src: "/discord.png",
            description: "",
            link: "https://discord.com/oauth2/authorize?client_id=1096350721458323556",
            github: "https://github.com/JaiSwarup/MemeBot"
        },
        {
            title: "Knight Crusade",
            src: "/knight-crusade.png",
            description: "",
            link: "https://jaiswarup.github.io/knights-crusade/",
            github: "https://github.com/JaiSwarup/knights-crusade"
        },
        {
            title: "Calculator App",
            src: "/calculator.png",
            description: "",
            link: "https://jaiswarup.github.io/calculatorapp.github.io/",
            github: "https://github.com/JaiSwarup/calculatorapp.github.io/"
        }
    ];

    return (
        <>
            <div className='flex flex-col h-full text-white mt-2 mb-5 p-5 w-full'>
                <h2 className='mt-5 text-6xl font-bold text-left'>Projects</h2>
                <div className="flex justify-center w-full mt-8">
                    <div className="flex flex-col md:flex-row w-11/12 justify-evenly md:items-end items-center gap-5 px-8 flex-wrap">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;