import Timeline from "../components/Timeline";

const About = () => {
    return (
        <>
            <div className="flex flex-col gap-4 p-5 min-h-screen h-full mt-10 ">
                <h1 className="text-6xl font-bold text-white mb-5">Education</h1>
                <div className="px-8">
                    <Timeline />
                </div>
                {/* <h1 className="text-6xl font-bold text-white mb-5">Acheivements</h1>
                <div className="px-8">
                    <Timeline />
                </div> */}
            </div>
        </>
    );
};

export default About;