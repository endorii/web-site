import Logo from "../assets/img/Logo.png";
import AppStore from "../assets/svg/AppStore(white).svg";
import PlayMarket from "../assets/svg/PlayMarket(white).svg";
import SmoothScrollLink from "./helpers/SmoothScrollLink";

const Footer = () => {
    const buttonsSvgs = [PlayMarket, AppStore];

    return (
        <footer className="bg-violet-600 px-[5%] py-[30px] sm:px-[40px] md:px-[80px] lg:px-[120px] lg:py-[42px] flex justify-between items-center">
            <div>
                <SmoothScrollLink to="#header">
                    <img src={Logo} alt="" />
                </SmoothScrollLink>
            </div>
            <ul className="flex gap-[20px] lg:gap-[35px] text-white font-bold flex-col sm:flex-row">
                <li>
                    <SmoothScrollLink to="#header">Main</SmoothScrollLink>
                </li>
                <li>
                    <SmoothScrollLink to="#about">About</SmoothScrollLink>
                </li>
                <li>
                    <SmoothScrollLink to="#pricing">Pricing</SmoothScrollLink>
                </li>
            </ul>
            <div className="flex gap-[15px] flex-col md:flex-row">
                {buttonsSvgs.map((buttonSvg, i) => {
                    return (
                        <button
                            className="flex justify-center items-center gap-[7px] w-full lg:w-[190px] h-[52px] bg-amber-400 text-white font-bold px-[13px] py-[7px] lg:px-[30px] lg:py-[11px] shadow-[0px 11px 5px 3px rgba(0,0,0,0.95)] transition-colors hover:bg-amber-500 active:bg-amber-600"
                            key={i}
                        >
                            <img src={buttonSvg} alt="" />
                            <p>Download</p>
                        </button>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
