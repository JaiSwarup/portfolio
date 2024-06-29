import Socials from "./Socials";

const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center h-full text-white mt-10 text-center md:text-left py-10'>
                <div className="flex flex-col-reverse md:flex-row w-full justify-evenly items-center">
                    <div className="flex flex-col w-1/2">
                        <h2 className="text-7xl font-bold mb-5">
                            {"Hey, I'm "}
                            <span className="text-sky-400 font-extrabold">
                                Jai
                            </span>
                            .
                        </h2>
                        <h3 className="text-3xl mt-1">{"I'm a "}<span className="font-black text-sky-400">Full Stack Developer</span></h3>
                        <div className="flex flex-col mt-4 gap-2 text-justify">
                            <p>A third-year CS student from with a zeal for full-stack development, Eager to innovate.</p>    
                            <p> I'm always ready to dive into new technologies and challenges.</p>
                        </div>
                        <Socials />
                    </div>
                    <div className="flex items-center justify-center border-2 border-sky-500 rounded-full">
                        <img src="/PFP.png" alt="my-picture" className="rounded-full h-80 w-80 object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;