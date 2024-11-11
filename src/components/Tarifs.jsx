import { useEffect, useState, useRef } from "react";

const Tarifs = () => {
    const plans = [
        {
            planName: "Free Plan",
            color: "bg-red-500",
            cost: { pm: 0, py: 0 },
            emails: "5",
            share: "Free Share",
            clients: "200",
            includes: "Chat support",
        },
        {
            planName: "Basic",
            color: "bg-teal-400",
            cost: { pm: 5, py: 50 },
            emails: "200",
            share: "Free Share",
            clients: "500",
            includes: "Chat + Email support",
        },
        {
            planName: "Advanced",
            color: "bg-violet-500",
            cost: { pm: 9, py: 90 },
            emails: "2000",
            share: "Free Share",
            clients: "1000",
            includes: "Chat + Email support",
        },
        {
            planName: "Most Advanced",
            color: "bg-amber-400",
            cost: { pm: 12, py: 120 },
            emails: "Unlimited Emails",
            share: "Free Share",
            clients: "10000",
            includes: "Personal Manager",
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const tarifsRef = useRef(null);
    const [isYearly, setIsYearly] = useState(false);

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

        if (tarifsRef.current) {
            observer.observe(tarifsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const togglePeriod = (period) => {
        setIsYearly(period);
    };

    return (
        <div
            id="pricing"
            ref={tarifsRef}
            className={`p-[10px] md:p-[80px] md:pt-[70px] pt-[30px] transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <p className="text-center">
                We have selected the best payment solutions for you.
            </p>
            <h2 className="mt-[20px] mb-[60px] text-center">
                Choose your tariff plan
            </h2>
            <div>
                <div className="flex justify-center mb-[50px] gap-0 ">
                    <button
                        className={`w-[140px] h-[60px] rounded-l-3xl border-2 border-r-0 rounded-none font-bold hover:bg-red-500 active:bg-red-600 focus:bg-red-500 transition-colors ${
                            !isYearly ? "bg-red-400" : ""
                        }`}
                        onClick={() => {
                            togglePeriod(false);
                        }}
                    >
                        Month
                    </button>
                    <button
                        className={`w-[140px] h-[60px] rounded-r-3xl border-2 border-l-1 rounded-none relative font-bold hover:bg-yellow-400 active:bg-yellow-500 focus:bg-yellow-400 transition-colors ${
                            isYearly ? "bg-yellow-300" : ""
                        }`}
                        onClick={() => {
                            togglePeriod(true);
                        }}
                    >
                        Years
                        <div className="w-[5px] h-[5px] bg-black absolute bottom-[-6px] left-[-5px]"></div>
                    </button>
                </div>
                <ul className="flex justify-center gap-[30px] flex-wrap text-center md:text-left">
                    {plans.map((plan, i) => (
                        <li
                            key={i}
                            className={`p-[30px] card w-[70%] sm:w-[278px] transition-transform duration-700 ${
                                isVisible
                                    ? "transform opacity-100 slide-up"
                                    : "transform opacity-0"
                            } ${plan.color}`}
                        >
                            <p className="font-medium">{plan.planName}</p>
                            <p className="mt-[20px] mb-[30px] font-semibold text-[30px]">
                                ${isYearly ? plan.cost.py : plan.cost.pm}{" "}
                                {isYearly ? "year" : "month"}
                            </p>
                            <ul className="flex flex-col gap-[10px] font-medium">
                                <li>
                                    {Number(plan.emails)
                                        ? plan.emails + " Emails"
                                        : "Unlimited Emails"}
                                </li>
                                <li>{plan.share}</li>
                                <li>{plan.clients} Clients</li>
                                <li>{plan.includes}</li>
                            </ul>
                            <button
                                className={`w-full mt-[30px] bg-white font-bold h-[56px] transition-colors
                                    ${
                                        plan.color === "bg-violet-500"
                                            ? "hover:bg-violet-600 active:bg-violet-700"
                                            : ""
                                    }
                                    ${
                                        plan.color === "bg-amber-400"
                                            ? "hover:bg-amber-500 active:bg-amber-600"
                                            : ""
                                    }
                                    ${
                                        plan.color === "bg-teal-400"
                                            ? "hover:bg-teal-500 active:bg-teal-600"
                                            : ""
                                    }
                                    ${
                                        plan.color === "bg-red-500"
                                            ? "hover:bg-red-600 active:bg-red-700"
                                            : ""
                                    }
                                `}
                            >
                                Get started
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tarifs;
