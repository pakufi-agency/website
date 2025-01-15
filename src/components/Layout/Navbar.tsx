"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "../../context/MobileMenuProvider";
import { DESKTOP_MEDIA_QUERY } from "../../utils/consts";

import styles from "./Navbar.module.scss";

import logo from "/public/images/logo.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isDropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (e: any, id: string) => {
    e.preventDefault();

    setDropdownOpen((prev) => (prev === id ? null : id));
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

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMobileMenuOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    handleResize();

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [setMobileMenuOpen]);

  return (
    <header
      id="header"
      className={`${styles.header} ${isMobileMenuOpen ? styles.isOpen : ""}`}
    >
      <div className={styles.conatinerNav}>
        <div className={`container ${styles.container}`}>
          <nav className={`navbar navbar-expand-md navbar-light ${styles.nav}`}>
            <Link href="/" className={`navbar-brand ${styles.logo}`}>
              <Image src={logo} alt="logo" width={110} height={36} />
              <span>Ethical Tech Agency</span>
            </Link>

            <div
              className={`collapse navbar-collapse ${
                isMobileMenuOpen && "show"
              } ${styles.navBarContent}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item ${styles.navItem}`}>
                  <Link href="/" className={styles.navLink}>
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link href="/about/" className={styles.navLink}>
                    About
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="/contact/"
                    className={styles.navLink}
                    // onClick={(e) => handleMenuItemClick(e, "contact")}
                  >
                    Contact
                  </Link>
                </li>
                {/* <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="#"
                    className={`${styles.navLink} ${
                      isDropdownOpen === "home" && styles.navLinkDropdown
                    } ${styles.linkWithIcon}`}
                    onClick={(e) => handleMenuItemClick(e, "home")}
                  >
                    Item with subitem example <Icon.ChevronDown />
                  </Link>
                  <ul
                    className={`${styles.dropdownMenu} ${
                      isDropdownOpen === "home" ? styles.dropdownOpen : ""
                    }`}
                  >
                    <li className={styles.navItem}>
                      <Link
                        href="/iot/"
                        className={`${styles.navLink} ${
                          currentRoute === "/iot/" ? "active" : ""
                        }`}
                      >
                        IOT
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
            {/* <div className={styles.othersOption}>
              <Link href="/" className={`btn button-pakufi-dark`}>
                Support us
              </Link>
            </div> */}

            <button
              className={`navbar-toggler ${styles.navBarMobileButton} ${
                isMobileMenuOpen ? "" : "collapsed"
              }`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarSupportedContent"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <Icon.X /> : <Icon.Menu />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
