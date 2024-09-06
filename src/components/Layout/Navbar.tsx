"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "/public/images/logo.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image src={logo} alt="logo" width={110} height={36} />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Home <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/iot/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/iot/" && "active"
                          }`}
                        >
                          IOT
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/hosting/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/hosting/" && "active"
                          }`}
                        >
                          Hosting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/machine-learning/" && "active"
                          }`}
                        >
                          Machine Learning
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      About <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/about/" && "active"
                          }`}
                        >
                          About Style 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/team/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      FAQ Pages <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services/" && "active"
                              }`}
                            >
                              Services Style 1
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-2/" && "active"
                              }`}
                            >
                              Services Style 2
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-3/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-3/" && "active"
                              }`}
                            >
                              Services Style 3
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services/service-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services/service-details/" &&
                                "active"
                              }`}
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Projects <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/projects/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/projects/" && "active"
                              }`}
                            >
                              Project Style 1
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/projects-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/projects-2/" && "active"
                              }`}
                            >
                              Project Style 2
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/projects/project-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/projects/project-details/" &&
                                "active"
                              }`}
                            >
                              Project Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Contact <Icon.ChevronDown />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/contact/" && "active"
                          }`}
                        >
                          Contact us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/faq/" && "active"
                          }`}
                        >
                          FAQ&apos;s
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">
                <Link href="/" className="btn btn-light">
                  Support us
                </Link>

                <Link href="/" className="btn btn-primary">
                  Support us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
