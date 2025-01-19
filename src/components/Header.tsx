import React from 'react';
import BlogPage from '../pages/blog';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>ポートフォリオ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header