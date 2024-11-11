import Logo from "../assets/img/Logo.png";
import Facebook from "../assets/svg/Facebook.svg";
import LinkedIn from "../assets/svg/Linkedin.svg";
import Google from "../assets/svg/Google.svg";
import Burger from "../assets/svg/Burger.svg";
import BurgerMenu from "./Burger";
import { useState } from "react";

const Header = () => {
    const links = [Facebook, LinkedIn, Google];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            id="header"
            className="h-[90px] bg-transparent absolute w-full px-[40px] py-[20px] sm:px-[120px] sm:py-[20px] z-30"
        >
            <div className="flex justify-between items-center">
                <div>
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="flex justify-center">
                    <ul className="flex justify-center items-center gap-[22px]">
                        {links.map((photo, i) => {
                            return (
                                <li key={i}>
                                    <img src={photo} alt="" />
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        className=" p-[13px] ml-[30px] md:ml-[50px] bg-white rounded-full border-2 border-black transition-colors hover:bg-teal-400 active:bg-teal-500 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <img src={Burger} alt="social" />
                    </div>
                </div>
            </div>
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default Header;
