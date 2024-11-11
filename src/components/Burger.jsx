import React, { useEffect } from "react";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
    // Заборона скролу, коли меню відкрите
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed z-100 top-0 right-0 w-full h-screen bg-black bg-opacity-80 flex items-center justify-center transition-transform duration-300 ease-in-out cursor-pointer ${
                isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
            }`}
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <nav className="text-center">
                <ul className="space-y-5 disabled">
                    <li>
                        <a
                            href="/"
                            className="text-white text-2xl hover:text-violet-400 transition-colors duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-white text-2xl hover:text-violet-400 transition-colors duration-300"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#pricing"
                            className="text-white text-2xl hover:text-violet-400 transition-colors duration-300"
                        >
                            Pricing
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;
