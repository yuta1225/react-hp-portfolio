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
            <div 
                className='hamburger-responsive'
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='hamburger-menu'>
                    <button
                        className={`hamburger-button ${isOpen ? 'open' : ''}`}
                    >
                        <span className='btn-line'></span>
                        <span className='btn-line'></span>
                        <span className='btn-line'></span>
                    </button>
                </div>
            </div>
            
        {isOpen && (
            <div className='menu-content open'>
                <nav>
                    <ul>
                        <li>
                            <Link 
                                href={"./#about"} 
                                className='list-item'
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href={"./#skills"} 
                                className='list-item'
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                SKILLS
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href={"/contact"} 
                                className='list-item'
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