import React from "react";
import Link from 'next/link';

const NavMenu = () => {
    const showActive = (e) => {
        let clickedItem = e.currentTarget.parentNode;
        clickedItem.querySelector(".submenu").classList.toggle("show");
        clickedItem.querySelector(".dropdown").classList.toggle("active");
      };
    return (        
        <ul className="main-menu__links">
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <button className="dropdown" onClick={showActive}>
                <i className="fa-solid fa-chevron-left"></i>
                </button>
                <ul className="submenu">
                    <li><Link href="/"><a>Digital Agency</a></Link></li>
                    <li><Link href="index-2"><a>Creative Agency</a></Link></li>
                </ul>                
            </li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li>
                <Link href="/about">
                    <a>Pages</a>
                </Link>
                <button className="dropdown" onClick={showActive}>
                <i className="fa-solid fa-chevron-left"></i>
                </button>
                <ul className="submenu">
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/single-blog"><a>Blog Details</a></Link></li>
                    <li><Link href="/team"><a>Team</a></Link></li>
                    <li><Link href="/single-team"><a>Team Details</a></Link></li>
                </ul>
            </li>
            <li>
                <Link href="/services">                    
                    <a>Services</a>
                </Link>
                <button className="dropdown" onClick={showActive}>
                <i className="fa-solid fa-chevron-left"></i>
                </button>                
                <ul className="submenu">
                    <li><Link href="/services"><a>Services</a></Link></li>
                    <li><Link href="/services-details"><a>Services Details</a></Link></li>
                </ul>
            </li>
            <li>
                <Link href="/portfolio">                    
                    <a>Portfolio</a>
                </Link>
                <button className="dropdown" onClick={showActive}>
                <i className="fa-solid fa-chevron-left"></i>
                </button>   
                <ul className="submenu">
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                    <li><Link href="/single-portfolio"><a>Portfolio Details</a></Link></li>
                </ul>
            </li>
        </ul>        
    );
};

export default NavMenu;