import React from "react";
import Link from "next/link";
import Image from "next/image"

const Contact = () => {
    return (
        <section id="contact" className="pt-[100px] pb-[100px]">
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="text-center">
                    <h2 className="text-center text-[40px] max-md:text-[22px] mb-[40px]">CONTACT</h2>
                    <div className="text-center">
                        <div className="mx-auto text-center">
                            <Link href={"/contact"} className="text-white text-sm font-bold bg-black px-[25px] py-[16px] border-[3px] border-black transition-all duration-300 no-underline inline-block">お問合せ</Link>
                        </div>
                        <div className="mt-[50px]">
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
