import {NavLink} from 'react-router-dom';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import { useState } from 'react';

interface NavbarProps {
    onContact: () => void
}
const Navbar : React.FC<NavbarProps> = ({onContact}) => {
    const handleOpen = () => {
        onContact();
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(val => !val);
    }
    return (
        <>
            <nav className="w-full border-b border-opacity-50 border-white text-white flex justify-between sticky top-0 items-center bg-sky-700 z-10">
                <NavLink className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal" to="/">
                    <span className='w-10'>
                        {"Jai Swarup"}
                    </span>
                </NavLink>
                <div className='hidden h-full md:flex'>
                    <NavLink className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal" to="/about">About</NavLink>
                    <NavLink className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal" to="/projects">Projects</NavLink>
                    <button type="button" className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal" onClick={handleOpen}>Contact</button>
                </div>
                <div className='md:hidden flex'>
                    <button type="button" className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal" onClick={toggleMenu}> 
                        {isOpen ?
                            <><IoClose /> <span className="sr-only">Close</span></> : 
                            <><IoMenuSharp /> <span className="sr-only">Open Menu</span></>
                        }
                    </button>
                </div>
            </nav>
            {isOpen && 
                <div className="flex flex-col gap-2 md:hidden items-center bg-sky-700 text-white">
                    <NavLink className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal w-full text-center" to="/about">About</NavLink>
                    <NavLink className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal w-full text-center" to="/projects">Projects</NavLink>
                    <button type="button" className="px-6 py-3 hover:bg-sky-600 transition-colors text-base font-normal w-full" onClick={handleOpen}>Contact</button>
                </div>}
        </>
    );
};

export default Navbar;