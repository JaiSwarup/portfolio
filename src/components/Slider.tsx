import { SiTypescript, SiJavascript, SiCplusplus, SiPython, SiReact, SiGit, SiNextdotjs } from "react-icons/si";
import { DiJava } from "react-icons/di";
import Card from "./SkillCard";
import { IconType } from "react-icons";
import { motion} from "framer-motion";

const Slider = () => {
    return (
        <>
            <h2 className="text-white text-3xl my-10 font-medium text-center">Skills</h2>
            <div className="p-4 w-full flex gap-4 mb-10 overflow-hidden">
                <motion.div 
                className="flex gap-4" 
                initial={{x:0}} 
                animate={{x:"-100%"}} 
                transition={{duration:10, repeat: Infinity, ease : "linear"}}>
                    {[...icons].map((icon, idx) => (
                        <Card icon={icon} key={idx} />
                    ))}
                </motion.div>
                <motion.div 
                className="flex gap-4" 
                initial={{x:0}} 
                animate={{x:"-100%"}} 
                transition={{duration:10, repeat: Infinity, ease : "linear"}}>
                    {[...icons].map((icon, idx) => (
                        <Card icon={icon} key={idx} />
                    ))}
                </motion.div>
            </div>
        </>
    );
};

const icons: IconType[] = [SiTypescript, SiJavascript, DiJava, SiPython, SiCplusplus, SiGit, SiReact, SiNextdotjs];

export default Slider;
