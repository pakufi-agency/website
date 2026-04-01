"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMobileMenu } from "../../context/MobileMenuProvider";
import { DESKTOP_MEDIA_QUERY } from "../../utils/consts";
import { appConfig } from "@/utils/appConfig";

import GlobalBanner from "../../components/GlobalBanner/GlobalBanner";

import logo from "/public/images/logo.png";

import styles from "./Navbar.module.scss";

interface Service {
  name: string;
  slug: string;
  createdAt?: string;
}

interface NavbarProps {
  services?: Service[];
}

const Navbar: React.FC<NavbarProps> = ({ services = [] }) => {
  const showBanner = appConfig.features.mentorshipBanner;

  const currentRoute = usePathname();
  const router = useRouter();
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isDropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [bannerVisible, setBannerVisible] = useState(showBanner);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (e: any, routeName: string) => {
    e.preventDefault();

    router.push(routeName);
    setMobileMenuOpen(false);
  };

  const handleParentItemCLick = (e: any, id: string) => {
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
      {bannerVisible && (
        <div style={{ paddingTop: showBanner ? "40px" : "0" }}>
          <GlobalBanner onClose={() => setBannerVisible(false)} />
        </div>
      )}

      <div className={styles.containerNav}>
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
                  <Link
                    href="/"
                    className={styles.navLink}
                    onClick={(e) => handleMenuItemClick(e, "/")}
                  >
                    Home
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    href="/services/"
                    className={`${styles.navLink} ${
                      currentRoute === "/services/" ? "active" : ""
                    }`}
                  >
                    Services
                  </Link>
                </li>
                {/* <li className={`nav-item ${styles.navItem}`}>
                  <div
                    className={`${styles.navLink} ${
                      isDropdownOpen === "services" && styles.navLinkDropdown
                    } ${styles.linkWithIcon}`}
                    onClick={(e) => handleParentItemCLick(e, "services")}
                  >
                    Services <Icon.ChevronDown />
                  </div>
                  <ul
                    className={`${styles.dropdownMenu} ${
                      isDropdownOpen === "services" ? styles.dropdownOpen : ""
                    }`}
                  >
                    {services.length > 0 ? (
                      services.map((service) => (
                        <li className={styles.navItem} key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className={`${styles.navLink} ${
                              currentRoute === `/services/${service.slug}`
                                ? "active"
                                : ""
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className={styles.navItem}>
                        <Link
                          href="/services/"
                          className={`${styles.navLink} ${
                            currentRoute === "/services/" ? "active" : ""
                          }`}
                        >
                          Overview
                        </Link>
                      </li>
                    )}
                  </ul>
                </li> */}
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="/projects/"
                    className={styles.navLink}
                    onClick={(e) => handleMenuItemClick(e, "/projects")}
                  >
                    Case Studies
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="/about/"
                    className={styles.navLink}
                    onClick={(e) => handleMenuItemClick(e, "/about")}
                  >
                    About us
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="/blog/"
                    className={styles.navLink}
                    onClick={(e) => handleMenuItemClick(e, "/blog")}
                  >
                    BLOG
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="/contact/"
                    className={styles.navLink}
                    onClick={(e) => handleMenuItemClick(e, "/contact")}
                  >
                    Contact us
                  </Link>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    href="/talent-growth/"
                    className={styles.navLink}
                    onClick={(e) => handleMenuItemClick(e, "/talent-growth")}
                  >
                    For Talent
                  </Link>
                </li>
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
