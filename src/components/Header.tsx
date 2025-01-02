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
                    <Link href={"/blog"}>BlogPage</Link>
                </li>
                <li>

                </li>
                <li>                    
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header