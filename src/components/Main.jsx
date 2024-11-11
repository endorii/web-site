import AppStore from "../assets/svg/AppStore.svg";
import PlayMarket from "../assets/svg/PlayMarket.svg";

import Phone from "../assets/img/Phone.png";
import Cloud1 from "../assets/img/clouds/Cloud1.png";
import Cloud2 from "../assets/img/clouds/Cloud2.png";
import Cloud3 from "../assets/img/clouds/Cloud3.png";
import Cloud4 from "../assets/img/clouds/Cloud4.png";
import Cloud5 from "../assets/img/clouds/Cloud5.png";

const Main = () => {
    const buttonsSvgs = [PlayMarket, AppStore];

    return (
        <main className="bg-violet-600 lg:px-[120px] px-30px pt-[150px] flex justify-center lg:justify-start lg:pt-[250px] relative">
            <div className="flex flex-col justify-center items-center lg:items-start">
                <h1 className="text-center lg:text-left w-[300px] sm:w-[500px] xl:w-[600px]">
                    The best fitness tracker!
                </h1>
                <div className="text-white w-[300px] text-center lg:text-left sm:w-[320px] xl:w-[400px] text-[18px] leading-[150%] mt-[30px]">
                    Nisi ullamco tempor tempor nulla labore ad labore sit eu
                    duis. Ut et esse cupidatat consequat ea exercitation.
                </div>
                <div className="flex justify-center flex-wrap lg:justify-start gap-[15px] mt-[50px] mb-[100px] lg:mb-[265px]">
                    {buttonsSvgs.map((buttonSvg, i) => {
                        return (
                            <button
                                className="flex justify-center items-center gap-[7px] font-bold bg-white px-[30px] py-[11px] shadow-[0px 11px 5px 3px rgba(0,0,0,0.95)] transition-colors hover:bg-teal-400 active:bg-teal-500 focus:bg-teal-400"
                                key={i}
                            >
                                <img src={buttonSvg} alt="" />
                                <p>Download</p>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-0 right-[7%] z-20 slide-up-no-opacity hidden lg:block">
                <div className="absolute bottom-[350px] left-[28%] z-20 slide-up text-center">
                    <p className="text-[27px] font-bold leading-none phone">
                        5000
                    </p>
                    <p className="phone">Steps</p>
                </div>

                <div className="absolute top-[385px] right-[25%] z-20 slide-up text-center text-white">
                    <p className="text-[27px] font-bold leading-none phone">
                        4200
                    </p>
                    <p className="phone">Meters</p>
                </div>

                <div className="absolute top-[515px] left-[26%] z-20 slide-up text-center text-white">
                    <p className="text-[27px] font-bold leading-none phone">
                        12
                    </p>
                    <p className="phone">Exercises</p>
                </div>

                <div className="absolute bottom-[26%] right-[23%] z-30 slide-up text-center">
                    <p className="text-[27px] font-bold leading-none phone">
                        5
                    </p>
                    <p className="phone">Achivements</p>
                </div>
                <img className="" src={Phone} alt="" />
            </div>

            <div className="absolute top-[60px] right-[22%] slide-up  hidden lg:block">
                <img className="" src={Cloud1} alt="" />
            </div>

            <div className="absolute top-[40%] right-[2%] slide-up hidden lg:block">
                <img className="" src={Cloud2} alt="" />
            </div>

            <div className="absolute bottom-[20%] right-[45%] lg:right-[42%] xl:right-[32%] z-20 slide-up hidden lg:block">
                <img className="" src={Cloud3} alt="" />
            </div>

            <div className="absolute bottom-0 right-0 z-20 slide-up hidden lg:block">
                <img className="" src={Cloud4} alt="" />
            </div>
            <div className="absolute bottom-0 right-[28%] slide-up hidden lg:block">
                <img className="" src={Cloud5} alt="" />
            </div>
        </main>
    );
};

export default Main;
