import React from "react";
import About from "./top/About";
import Skills from "./top/Skills";
import Contact from "./top/Contact";
import Image from "next/image";

const Main = () => {
    return (
        <>
            <div id="mainVisual">
                <div 
                    className="pc index-hero-img-pc"
                    style={{ position: "relative", width: "100%", aspectRatio: "16/8.2" }}
                >
                    <Image
                        src="images/hero-top.png"
                        alt="サムネイル"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="sp index-hero-img-sp">
                    <img src="" alt="" />
                </div>
            </div>
            <About />
            <Skills />
            <Contact />
        </>
    );
}

export default Main;