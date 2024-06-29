import { FaGraduationCap } from "react-icons/fa";
const Timeline = () => {
    const data = [
        {
            title: "B. Tech, Computer Science Engineering",
            subtitle: "Netaji Subhash University Of Technology",
            time: "2022 - Present",
            gpa: "GPA : 8.23"
        },
        {
            title: "Senior Secondary",
            subtitle: "Pragati Public School",
            time: "2021 - 2022",
            gpa: "Percentage : 96.8"
        },
        {
            title: "Secondary",
            subtitle: "Pragati Public School",
            time: "2019 - 2020",
            gpa: "Percentage : 93.8"
        }
    ]
    return (
    <div className="relative border-s border-gray-200">                  
        <div className="ms-6 flex flex-col gap-5">  
            {data.map((item, index) => (
                <div key={index}>
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-white bg-blue-900">
                        <FaGraduationCap className="text-white" />
                    </span>
                    <div className="flex justify-between">
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{item.title}</h3>
                        <time className=" text-sm font-medium me-2 px-2.5 py-0.5 rounded text-sky-300 ms-3 flex items-center">{item.time}</time>
                    </div>
                    <p className="mb-2 text-base font-normal text-gray-400">{item.subtitle}</p>
                    <p className="block mb-2 text-sm font-normal leading-none text-sky-500">{item.gpa}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Timeline;