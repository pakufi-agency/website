import React, { FC } from "react";
import Link from "next/link";

const NavMenu: FC = () => {
  const showActive = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".submenu").classList.toggle("show");
    clickedItem.querySelector(".dropdown").classList.toggle("active");
  };
  return (
    <ul className="main-menu__links">
      <li>
        <Link href="/about">About</Link>
        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="/about">Our mission</Link>
          </li>
          <li>
            <Link href="/team">Who we are</Link>
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
            <Link href="/services">I am a client</Link>
          </li>
          <li>
            <Link href="/services">I am a developer</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/">Support Pakufi</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
