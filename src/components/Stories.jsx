import Story1 from "../assets/img/stories/Story1.png";
import Story2 from "../assets/img/stories/Story2.png";
import Story3 from "../assets/img/stories/Story3.png";

const Stories = () => {
    const stories = [Story1, Story2, Story3];

    return (
        <div className="p-[30px] lg:p-[120px]">
            <h2 className="mt-[20px] mb-[60px] text-center">
                Stories of our users
            </h2>
            <ul className="flex justify-center gap-[30px] flex-wrap">
                {stories.map((story, i) => {
                    return (
                        <li key={i} className="w-[380px]">
                            <div>
                                <img src={story} alt="" />
                                <div className="mt-[25px] text-[24px] font-bold">
                                    Stories of our users
                                </div>
                                <div className="mt-[5px] text-[18px]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                                <div className="mt-[16px] text-[18px] font-medium">
                                    17.10.20
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Stories;
