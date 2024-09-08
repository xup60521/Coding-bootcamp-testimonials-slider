import Tanya from "@/assets/images/image-tanya.jpg";
import John from "@/assets/images/image-john.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PatternBg from "@/assets/images/pattern-bg.svg";
import Quotes from "@/assets/images/pattern-quotes.svg";

const data = [
    {
        content: `“ I’ve been interested in coding for a while but never taken the
                jump, until now. I couldn’t recommend this course enough. I’m
                now in the job of my dreams and so excited about the future. ”`,
        image: Tanya,
        name: "Tanya Sinclair",
        role: "UX Engineer",
    },
    {
        content: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
        image: John,
        name: "John Tarkpor",
        role: "Junior Front-end Developer",
    },
];

export default function Content() {
    const [currentDisplay, setCurrentDisplay] = useState<0 | 1>(0);
    const item = data[currentDisplay];
    return (
        <div className="w-full flex md:flex-row flex-col-reverse md:justify-end md:min-h-fit items-center md:px-[13vw] md:py-0 py-16">
            {/* inner absolute container */}
            <img src={Quotes} alt="" className="md:hidden -translate-y-[15rem] block absolute size-12 z-20" />
            <div className="flex-grow relative z-10 h-[30vh]">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        key={currentDisplay}
                        className="flex md:px-0 md:text-left w-full text-center md:py-0 py-16 flex-col md:w-[45vw] absolute text-c_Dark_Blue font-light gap-6 overflow-visible md:items-start items-center"
                    >
                        <p
                            key={item.content}
                            className="md:text-3xl md:w-full w-[80vw]"
                        >
                            {item.content}
                        </p>
                        <div className="flex items-center md:gap-2 md:flex-row flex-col">
                            <span className="text-c_Dark_Blue font-semibold md:text-[1rem] text-sm md:w-fit w-24">
                                {item.name}
                            </span>
                            <span className="text-c_Grayish_Blue md:text-[1rem] text-sm md:w-fit w-24">
                                {item.role}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="relative md:w-auto md:h-auto w-[70vw] ">
                <div className="md:h-[60vh] h-auto md:w-auto w-[70vw] aspect-square relative">
                    <img
                        src={PatternBg}
                        alt=""
                        className="md:hidden absolute -z-10 top-0 scale-125"
                    />
                    <AnimatePresence>
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            key={item.image}
                            src={item.image}
                            alt={item.image}
                            className="md:h-[60vh] shadow-xl absolute top-0 left-0"
                        />
                    </AnimatePresence>
                </div>
                <div className="absolute md:left-12 left-[50%] md:-translate-x-0 -translate-x-[50%] bottom-0 translate-y-[50%] rounded-full bg-white flex z-20">
                    <button
                        onClick={() =>
                            setCurrentDisplay((prev) => (prev === 1 ? 0 : 1))
                        }
                        className="text-c_Grayish_Blue outline-none font-bold flex  items-center justify-center p-2 group"
                    >
                        <span className="sr-only">left</span>
                        <FaAngleLeft className="text-c_Grayish_Blue transition group-hover:text-c_Dark_Blue" />
                    </button>
                    <button
                        onClick={() =>
                            setCurrentDisplay((prev) => (prev === 1 ? 0 : 1))
                        }
                        className="text-c_Grayish_Blue outline-none font-bold flex  items-center justify-center p-2 group"
                    >
                        <span className="sr-only">right</span>
                        <FaAngleRight className="text-c_Grayish_Blue transition group-hover:text-c_Dark_Blue" />
                    </button>
                </div>
            </div>
        </div>
    );
}
