import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false);

  return (
    <header>
        {/* PC用ヘッダー */}
        <div className="hidden md:flex bg-black text-white w-full z-10 h-[100px] fixed top-0 items-center">
            <div className="max-w-[1200px] w-4/5 flex items-center justify-between mx-auto">
                <div className='logo'>
                    <h3 className="text-[2rem] m-0">
                        <Link href={"/"} lang='en' className="no-underline text-white transition-all duration-200 hover:text-green-400">Yuta Handa</Link>
                    </h3>
                </div>

                <nav>
                    <ul className="m-0 p-0">
                        <li className="list-none inline-block mr-[30px] text-[1.5rem]">
                            <Link href={"./#about"} lang='en' className="no-underline text-white transition-all duration-200 hover:text-green-400">ABOUT</Link>
                        </li>
                        <li className="list-none inline-block mr-[30px] text-[1.5rem]">
                            <Link href={"./#skills"} lang='en' className="no-underline text-white transition-all duration-200 hover:text-green-400">SKILLS</Link>
                        </li>
                        <li className="list-none inline-block mr-[30px] text-[1.5rem]">
                            <Link href={"/contact"} lang='en' className="no-underline text-white transition-all duration-200 hover:text-green-400">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        {/* SP用ヘッダー */}
        <div className="md:hidden">
            <div
                className="fixed top-[15px] right-[15px] h-[60px] w-[60px] flex justify-center items-center z-[200] bg-black"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <button className="flex flex-col gap-[6px] border-none bg-transparent p-0 cursor-pointer">
                        <span
                            className="block h-[3px] w-[25px] bg-white transition-all duration-300 ease-in-out"
                            style={{ transform: isOpen ? "translateY(9px) rotate(45deg)" : "none" }}
                        />
                        <span
                            className="block h-[3px] w-[25px] bg-white transition-all duration-300 ease-in-out"
                            style={{ opacity: isOpen ? 0 : 1 }}
                        />
                        <span
                            className="block h-[3px] w-[25px] bg-white transition-all duration-300 ease-in-out"
                            style={{ transform: isOpen ? "translateY(-9px) rotate(-45deg)" : "none" }}
                        />
                    </button>
                </div>
            </div>

        {isOpen && (
            <div className="w-screen h-screen fixed top-0 right-0 left-0 z-[90] bg-black/90 transition-all duration-500">
                <nav>
                    <ul className="pt-[70px] px-[15px] p-0 list-none">
                        <li className="border-b border-white w-full">
                            <Link
                                href={"./#about"}
                                className="block w-full text-white no-underline py-[9px] px-[15px]"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="border-b border-white w-full">
                            <Link
                                href={"./#skills"}
                                className="block w-full text-white no-underline py-[9px] px-[15px]"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                SKILLS
                            </Link>
                        </li>
                        <li className="border-b border-white w-full">
                            <Link
                                href={"/contact"}
                                className="block w-full text-white no-underline py-[9px] px-[15px]"
                                onClick={() => setIsOpen(!isOpen)}
                                >
                                    CONTACT
                                </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )}
        </div>

    </header>
  )
}

export default Header
