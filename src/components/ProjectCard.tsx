import { IoOpenOutline } from "react-icons/io5"
import { AnimatePresence, motion } from "framer-motion";
import Button from "./IconButton";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
interface ProjectCardProps {
    title : string
    src : string
    description? : string
    link: string
    github: string
}
const ProjectCard : React.FC<ProjectCardProps> = ({title, src, description, link, github}) => {
    const [showOverLay, setShowOverLay] = useState(false);
    return (
        <div className="relative flex flex-col items-start gap-2 bg-gray-800 min-w-72 rounded-xl shadow-2xl w-full max-w-[500px] overflow-hidden">
            <AnimatePresence>
            <motion.div onHoverStart={()=>setShowOverLay(true)} onHoverEnd={()=>setShowOverLay(false)} className="w-full" >
            {showOverLay && <motion.div className="absolute inset-0 h-56 w-full bg-black bg-opacity-50 flex items-center justify-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <Link className="font-normal bg-white rounded-full text-black py-2 px-4 text-lg flex items-center justify-center" target="_black" to={link}>{"Live Demo "} <IoOpenOutline className="text-3xl pl-2 place-content-center" /></Link>
            </motion.div>}
            <img src={src} alt={`Project: ${title}`} className="h-56 w-full object-cover self-center" />
            </motion.div>
            </AnimatePresence>
            <div className="px-3 pb-3 flex flex-col gap-2">
                <h3 className="text-2xl uppercase font-bold">{title}</h3>
                <p>{description}</p>
                <div className="flex gap-2 w-full">
                    <Button icon={BsGithub} href={github} title="View Repo" className="w-full"></Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;