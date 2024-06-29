import ProjectCard from "./ProjectCard";

const Featured = () => {
    return (
        <>
            <div className='flex flex-col items-center h-full text-white my-10 w-full'>
                <h2 className='text-3xl font-medium'>Featured Projects</h2>
                <div className="flex justify-center w-full mt-8">
                    <div className="flex flex-col md:flex-row justify-evenly md:items-end items-center gap-10 px-12">
                        <ProjectCard title="Weather App" src="/weather-app.png" description="" link="https://jaiswarup.github.io/weatherapp.github.io/" github="https://github.com/JaiSwarup/weatherapp.github.io" />
                        <ProjectCard title="Discord Bot" src="/discord.png" description="" github="https://github.com/JaiSwarup/MemeBot" link="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;