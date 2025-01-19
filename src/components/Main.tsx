import React from "react";
import About from "./top/About";
import Skills from "./top/Skills";
import Contact from "./top/Contact";

const Main = () => {
    return (
        <main>
            <div id="mainVisual">
                <div className="pc">
                    <img src="" alt="" />
                </div>
                <div className="sp">
                    <img src="" alt="" />
                </div>
            </div>
            <About />
            <Skills />
            <Contact />
        </main>
    );
}

export default Main;