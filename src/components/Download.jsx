import { useState } from "react";
import emailjs from "emailjs-com";
import AppStore from "../assets/svg/AppStore(white).svg";
import PlayMarket from "../assets/svg/PlayMarket(white).svg";
import Checkbox from "./Checkbox";

const Download = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_company: "",
    });
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_hh82og2",
                "template_l90m3z7",
                formData,
                "DKzsNZuH9p5ZpNOlE"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("The welcome letter has been sent!");
                    setFormData({
                        user_name: "",
                        user_email: "",
                        user_phone: "",
                        user_company: "",
                    });
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("An error occurred while sending the letter.");
                }
            );
    };

    const buttonsSvgs = [PlayMarket, AppStore];

    return (
        <div className="px-[30px] py-[70px] lg:px-[120px] flex flex-col lg:py-[80px] relative justify-center gap-[20%] items-center xl:flex-row">
            <div className="flex justify-center flex-col items-center lg:items-start">
                <h2 className="w-full text-center lg:text-left lg:w-[500px]">
                    Download now and get a bonus!
                </h2>
                <div className="w-full text-center lg:text-left lg:w-[450px] text-[18px] leading-[150%] mt-[30px]">
                    Nisi ullamco tempor tempor nulla labore ad labore sit eu
                    duis. Ut et esse cupidatat consequat ea exercitation.
                </div>
                <div className="flex gap-[15px] lg:gap-[15px] mt-[50px] flex-wrap justify-center lg:justify-start mb-[50px]">
                    {buttonsSvgs.map((buttonSvg, i) => (
                        <button
                            className="flex justify-center items-center gap-[7px] bg-red-500 text-white font-bold px-[30px] py-[11px] shadow-[0px 11px 5px 3px rgba(0,0,0,0.95)] transition-colors hover:bg-red-600 active:bg-red-700"
                            key={i}
                        >
                            <img src={buttonSvg} alt="" />
                            <p>Download</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="card p-[40px]">
                <div className="text-[24px]">
                    Can't choose a{" "}
                    <span className="font-bold text-red-500">plan</span>? We
                    will help you!
                </div>
                <div className="mb-[40px]">
                    Fill out the form and we will contact you!
                </div>
                <form onSubmit={sendEmail} className="flex flex-col gap-[15px]">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="input w-full lg:h-[50px]"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="input w-full lg:h-[50px]"
                    />
                    <input
                        type="text"
                        name="user_phone"
                        placeholder="Phone number"
                        value={formData.user_phone}
                        onChange={handleChange}
                        className="input w-full lg:h-[50px]"
                    />
                    <input
                        type="text"
                        name="user_company"
                        placeholder="Company"
                        value={formData.user_company}
                        onChange={handleChange}
                        className="input w-full lg:h-[50px]"
                    />
                    <div className="flex gap-[15px] mt-[15px] items-center">
                        <Checkbox checked={checked} setChecked={setChecked} />
                        <p className="text-[#474A57]">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <button
                        type="submit"
                        className={`font-bold text-white mt-[10px] transition-colors ${
                            checked === false ||
                            !formData.user_name ||
                            !formData.user_email ||
                            !formData.user_email.match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            ) ||
                            !formData.user_phone ||
                            !formData.user_company
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-red-500 hover:bg-red-600 active:bg-red-700"
                        }`}
                        disabled={
                            checked === false ||
                            !formData.user_name ||
                            !formData.user_email ||
                            !formData.user_email.match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            ) ||
                            !formData.user_phone ||
                            !formData.user_company
                        }
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Download;
