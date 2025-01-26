import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact">
            <div className="inner">
                <div className="section-title-area">
                    <h2 className="section-title">CONTACT</h2>
                    <div className="section-intro">
                        <div className="btn">
                            <Link href={"/contact"}>お問合せ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;