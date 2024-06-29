import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import Button from "./IconButton";

const Socials= () => {
    return (
        <div className="flex mt-4 gap-5 justify-center md:justify-start">
            <Button icon={BsGithub} href="https://github.com/JaiSwarup"></Button>
            <Button icon={BsLinkedin} href="https://www.linkedin.com/in/jai-swarup-19b250262/"></Button>
            <Button icon={SiLeetcode} href="https://leetcode.com/u/JaiSwarup/"></Button>
            <Button icon={SiCodeforces} href="https://codeforces.com/profile/JaiSwarup"></Button>
            <Button icon={SiCodechef} href="https://www.codechef.com/users/jswarup"></Button>
        </div>
    );
};

export default Socials;