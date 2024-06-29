import { Link } from "react-router-dom";
interface FooterProps {
    onContact: () => void
}

const Footer : React.FC<FooterProps> = ({onContact}) => {
    const handleOpen = () => {
        onContact();
    }
    const onClick = (href:string) => {
        if(href) {
            window.open(href, '_blank');
        }
    }
    return (
        <footer className="shadow bg-sky-700 text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4">
                <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                      <Link to="/" className="flex items-center">
                          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Jai Swarup</span>
                      </Link>
                  </div>
                  <div className="flex justify-between gap-24 mr-5">
                      <div>
                          <h2 className="mb-3 text-lg font-semibold uppercase">Important Links</h2>
                          <div className="text-gray-100 font-medium flex flex-col">
                                  <Link to="/about" className="hover:underline">About</Link>
                                  <Link to="/projects" className="hover:underline">Projects</Link>
                                  <Link to="https://github.com/JaiSwarup" className="hover:underline" target="_blank">Github</Link>
                                  <Link to="https://www.linkedin.com/in/jai-swarup-19b250262/" className="hover:underline" target="_blank">LinkedIn</Link>
                          </div>
                      </div>
                      <div>
                          <div className="text-gray-100 font-medium gap-2 flex flex-col justify-center items-center w-full">
                              <button type="button" onClick={handleOpen} className="px-6 py-2 hover:bg-sky-600 transition-colors text-base font-normal border-2 border-white w-full rounded-md">Contact</button>
                                <button type="button" className="px-6 py-2 hover:bg-sky-600 transition-colors text-base font-normal border-2 border-white w-full rounded-md" onClick={()=>onClick("https://drive.google.com/file/d/1O3agr7q6Ac49IUCTK64wsk4LthOh45DI/view?usp=drive_link")}>Resume</button>
                          </div>
                      </div>
                  </div>
              </div>
                <hr className="my-6 sm:mx-auto border-gray-400 lg:my-8" />
                <span className="block text-sm text-gray-100 sm:text-center">© 2024 <Link to="https://flowbite.com/" className="hover:underline">Jai Swarup™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;