import React from 'react';
import BlogPage from '../pages/blog';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>
                <Link href={"/"}>ポートフォリオ</Link>
            </h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link href={"./#about"}>ABOUT</Link>
                </li>
                <li>
                    <Link href={"./#skills"}>SKILLS</Link>
                </li>
                <li>
                    <Link href={"/contact"}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header