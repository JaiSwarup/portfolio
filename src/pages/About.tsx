import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";

interface CertificateProps {
    title : string
    link : string
    date : string
    description : string
}

const About = () => {
    const achievements = [
        "Ranked 4607 in JEE MAINS",
        "Ranked 9814 in JEE ADVANCED",
        "Ranked 486 in COMED-K",
        "1st Place in XeroCrypt (Nationwide Event Organized by Devcomm NSUT)",
    ]
    const certifications:CertificateProps[] = [
        {
            title : "Graphs Camp By Algo-University (Backed by Y-Combinator)",
            link : "https://drive.google.com/file/d/1qH5033p0NnD63DeI8x-vEhOdY9jHhWKa/view?usp=sharing", 
            date : "May 2024",
            description : "Training course led by a Codeforces master on Advanced Graphs Problems."
        },
        {
            title : "The Science Of Happiness and Wellbeing Certificate",
            link : "https://drive.google.com/file/d/1pLg4yd5fhL1-FMYDrg1IVxhwm8l4tXe8/view?usp=sharing",
            date : "Feb 2023",
            description : "8-week long online training course offered by NPTEL Swayam Portal on The Science Of Happiness and Wellbeing."},
        {
            title : "Yoga and Positive Psychology Certificate",
            link : "https://drive.google.com/file/d/1SIK_fqf9tIvGYe6WjGBMvU5WY8jyrhOW/view?usp=drive_link",
            date : "May 2023",
            description : "8-week long online training course offered by NPTEL Swayam Portal on Yoga and Positive Psychology."
        }
    ]
    return (
        <>
            <div className="flex flex-col min-h-screen h-full mt-10 ">
                <section className="p-5">
                    <h1 className="text-6xl font-bold text-white mb-5">Education</h1>
                    <div className="px-8">
                        <Timeline />
                    </div>
                </section>
                <section className="p-5">
                    <h1 className="text-6xl font-bold text-white mb-5">Achievements</h1>
                    <div className="px-8">
                            {achievements.map((achievement, index) => (
                                <div className="relative" key={index}>
                                    <li className="text-xl text-white p-1">{achievement}</li>
                                </div>
                            ))}
                    </div>
                </section>
                <section className="p-5">
                    <h1 className="text-6xl font-bold text-white mb-5">Certifications</h1>
                    <div className="px-8 pr-10">
                            {certifications.map((certification, index) => (
                                <div className="py-4">
                                    <div className="flex justify-between pb-2">
                                    <Link key={index} to={certification.link} className="text-xl text-white font-black hover:underline hover:underline-offset-2">{certification.title}</Link>
                                    <time className="text-lg text-sky-300">{certification.date}</time>
                                    </div>
                                    <p className="text-gray-300 font-light text-base pl-4">{certification.description}</p>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;