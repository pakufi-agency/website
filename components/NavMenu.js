import React from "react";
import Link from "next/link";

const NavMenu = () => {
  const showActive = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".submenu").classList.toggle("show");
    clickedItem.querySelector(".dropdown").classList.toggle("active");
  };
  return (
    <ul className="main-menu__links">
      <li>
        <Link href="/">Home</Link>
        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="/">Digital Agency</Link>
          </li>
          <li>
            <Link href="index-2">Creative Agency</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/about">Pages</Link>
        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/single-blog">Blog Details</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/single-team">Team Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/services">Services</Link>
        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/services-details">Services Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/portfolio">Portfolio</Link>
        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/single-portfolio">Portfolio Details</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavMenu;
