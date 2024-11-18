"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "../../context/MobileMenuProvider";

import styles from "./Navbar.module.scss";

import logo from "/public/images/logo.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isDropdownOpen, setDropdownOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (e: any) => {
    e.preventDefault();

    setDropdownOpen(!isDropdownOpen);
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
    <header
      id="header"
      className={`${styles.header} ${isMobileMenuOpen ? styles.isOpen : ""}`}
    >
      <div className={styles.startpNav}>
        <div className={`container ${styles.container}`}>
          <nav className={`navbar navbar-expand-md navbar-light ${styles.nav}`}>
            <Link href="/" className={`navbar-brand ${styles.logo}`}>
              <Image src={logo} alt="logo" width={110} height={36} />
            </Link>

            <div
              className={`collapse navbar-collapse ${
                isMobileMenuOpen ? "show" : ""
              } ${styles.navBarContent}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={handleMenuItemClick}
                  >
                    Home <Icon.ChevronDown />
                  </Link>
                  <ul
                    className={`${styles.dropdownMenu} ${
                      isDropdownOpen ? styles.dropdownOpen : ""
                    }`}
                  >
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
                  </ul>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={handleMenuItemClick}
                  >
                    About <Icon.ChevronDown />
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={handleMenuItemClick}
                  >
                    Contact <Icon.ChevronDown />
                  </Link>
                </li>
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
