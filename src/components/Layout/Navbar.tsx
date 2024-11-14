"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

import logo from "/public/images/logo.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        header.classList.toggle("isSticky", window.scrollY > 170);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`${styles.header} ${styles.headroom}`}>
      <div className={styles.startpNav}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={110} height={36} />
            </Link>

            <div
              className={`collapse navbar-collapse ${menuOpen ? "show" : ""} ${
                styles.navBarContent
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Home <Icon.ChevronDown />
                  </Link>
                  <ul className={`${styles.dropdownMenu}`}>
                    <li className={styles.navItem}>
                      <Link
                        href="/iot/"
                        className={`nav-link ${
                          currentRoute === "/iot/" ? "active" : ""
                        }`}
                      >
                        IOT
                      </Link>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </li>
                {/* Add more top-level links as needed */}
              </ul>
            </div>
            <div className={styles.othersOption}>
              <Link href="/" className={`btn btn-light ${styles.btnLight}`}>
                Support us
              </Link>

              <Link href="/" className={`btn btn-primary ${styles.btnPrimary}`}>
                Support us
              </Link>
            </div>
            <button
              className={`navbar-toggler ${styles.navBarMobileMenu} ${
                menuOpen ? "" : "collapsed"
              }`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarSupportedContent"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <Icon.X /> : <Icon.Menu />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
