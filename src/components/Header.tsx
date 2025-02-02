import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false);

  return (
    <header>
        {/* PC用ヘッダー */}
        <div className='pc'>
            <div className='inner'>
                <div className='logo'>
                    <h3>
                        <Link href={"/"} lang='en'>Yuta Handa</Link>
                    </h3>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link href={"./#about"} lang='en'>ABOUT</Link>
                        </li>
                        <li>
                            <Link href={"./#skills"} lang='en'>SKILLS</Link>
                        </li>
                        <li>
                            <Link href={"/contact"} lang='en'>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        {/* SP用ヘッダー */}
        <div className='sp'>
            <div className='hamburger-menu'>
                <button className='hamburger-button'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className='btn-line'></span>
                    <span className='btn-line'></span>
                    <span className='btn-line'></span>
                </button>
            </div>
            
        {isOpen && (
            <div className='menu-content'>
                <nav>
                    <ul>
                        <li>
                            <Link href={"./#about"} lang='en'>ABOUT</Link>
                        </li>
                        <li>
                            <Link href={"./#skills"} lang='en'>SKILLS</Link>
                        </li>
                        <li>
                            <Link href={"/contact"} lang='en'>CONTACT</Link>
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