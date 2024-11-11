import { useEffect, useState, useRef } from "react";
import Clock from "../assets/img/Clock.png";
import emailjs from "emailjs-com";

const Watch = () => {
    const [seconds, setSeconds] = useState(0);
    const [curTime, setCurTime] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const watchRef = useRef(null);

    // Стан для email
    const [userEmail, setUserEmail] = useState("");

    // Обробник зміни вводу
    const handleChange = (e) => setUserEmail(e.target.value);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_hh82og2",
                "template_q7yrsul",
                { user_email: userEmail },
                "DKzsNZuH9p5ZpNOlE"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("The welcome letter has been sent!");
                    setUserEmail("");
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("An error occurred while sending the letter.");
                }
            );
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (watchRef.current) {
            observer.observe(watchRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setCurTime(`${hours}:${minutes}`);

            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            ref={watchRef}
            className={`bg-violet-600 px-[30px] pt-[70px] sm:px-[120px] text-center lg:text-start flex sm:pt-[150px] justify-center lg:justify-start relative transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="lg:text-left w-[300px] sm:w-[485px] text-center flex flex-col items-center lg:items-start">
                <h3>Start training already on your watch</h3>
                <div className="text-white text-center lg:text-left w-[300px] lg:w-[420px] text-[18px] leading-[150%] mt-[30px]">
                    Nisi ullamco tempor tempor nulla labore ad labore sit eu
                    duis. Ut et esse cupidatat consequat. Nisi ullamco tempor
                    tempor nulla labore ad labore sit eu duis. Ut et esse
                    cupidatat consequat.
                </div>
                <form
                    onSubmit={sendEmail}
                    className="flex justify-center gap-[10px] mt-[50px] mb-[90px] sm:mb-[130px] flex-wrap"
                >
                    <input
                        type="email"
                        value={userEmail}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full sm:w-[280px] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button
                        type="submit"
                        disabled={
                            !userEmail.match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            )
                        }
                        className="w-full sm:w-[185px] bg-yellow-400 text-[16px] font-bold text-white hover:bg-yellow-600 active:bg-yellow-700 focus:bg-yellow-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Let’s GO!
                    </button>
                </form>
            </div>
            <div
                className={`absolute bottom-[5%] right-[7%] z-10  hidden xl:block ${
                    isVisible ? "slide-up" : ""
                }`}
            >
                <img src={Clock} alt="Clock" className="" />
                <div className="absolute flex inset-0 items-center text-white text-3xl font-bold time hidden xl:block">
                    <span
                        className={`absolute top-[125px] left-[155px] ${
                            isVisible ? "slide-up" : ""
                        }`}
                    >
                        {curTime}
                    </span>
                </div>
                <div className="absolute flex inset-0 justify-end items-center text-white text-3xl font-bold time hidden xl:block">
                    <span
                        className={`absolute top-[125px] right-[155px] ${
                            isVisible ? "slide-up" : ""
                        }`}
                    >
                        {seconds}s
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Watch;
