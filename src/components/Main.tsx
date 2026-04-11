import React from "react";
import About from "./top/About";
import Skills from "./top/Skills";
import Contact from "./top/Contact";
import Script from "next/script";

const Main = () => {
    return (
        <>
            <div id="mainVisual" className="max-md:hidden h-[calc(100vh-100px)] bg-black">
                <div id="hero-page" className="w-full h-full flex items-center justify-center" />
            </div>
            <Script src="/js/animation.js" strategy="afterInteractive" />
            <About />
            <Skills />
            <Contact />
        </>
    );
}

export default Main;