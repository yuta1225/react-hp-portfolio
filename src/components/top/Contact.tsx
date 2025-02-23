import React from "react";
import Link from "next/link";
import Image from "next/image"

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
                        <div className="github-link">
                            <Link href={"https://github.com/yuta1225"}>
                                <Image
                                    src="images/icons8-github-header.png"
                                    alt=''
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <div>Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;