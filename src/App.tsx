import PatternBg from "@/assets/images/pattern-bg.svg?react";
import PatternCurve from "@/assets/images/pattern-curve.svg";
import PatternQuotes from "@/assets/images/pattern-quotes.svg?react";
import { Fragment } from "react/jsx-runtime";
import Content from "./Content";

export default function App() {
    return (
        <main
            data-testid="test-app"
            className="w-full min-h-[45rem] h-screen flex md:items-center justify-center font-inter relative"
        >
            <PatternBackground />
            <Content />
        </main>
    );
}

function PatternBackground() {
    return (
        <Fragment>
            <PatternBg className="absolute -z-10 md:block hidden right-0 md:scale-[0.9]" />
            <img src={PatternCurve} alt="" className="absolute -z-10 bottom-0 left-0" />
            <PatternQuotes className="absolute -z-10 md:top-[25vh] md:left-[18vw] md:scale-100 scale-50" />
        </Fragment>
    );
}
