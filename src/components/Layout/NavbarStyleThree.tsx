"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "/public/images/logo.png";

const NavbarStyleThree: React.FC = () => {
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
      <header id="header" className="headroom navbar-style-three">
        <div className="startp-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand" >
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
                          href="/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute === "/" ? "active" : ""
                          }`}
                          
                        >
                          IT Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/it-startup-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/it-startup-2/" && "active"
                          }`}
                          
                        >
                          IT Startup Two
                        </Link>
                      </li>

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

                      <li className="nav-item">
                        <Link
                          href="/machine-learning-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/machine-learning-2/" && "active"
                          }`}
                          
                        >
                          Machine Learning 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/bigdata-analytics/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/bigdata-analytics/" && "active"
                          }`}
                          
                        >
                          Bigdata Analytics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/digital-agency/" && "active"
                          }`}
                          
                        >
                          Digital Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency-portfolio/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/digital-agency-portfolio/" &&
                            "active"
                          }`}
                          
                        >
                          Digital Agency Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pc-repair/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/pc-repair/" && "active"
                          }`}
                          
                        >
                          PC Repair
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
                          href="/about-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/about-2/" && "active"
                          }`}
                          
                        >
                          About Style 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/about-3/" && "active"
                          }`}
                          
                        >
                          About Style 3
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
                      Pages <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Features <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/features/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/features/" && "active"
                              }`}
                              
                            >
                              Features
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/features/feature-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/features/feature-details/" &&
                                "active"
                              }`}
                              
                            >
                              Features Details
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
                              href="/services-4/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-4/" && "active"
                              }`}
                              
                            >
                              Services Style 4
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-5/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/services-5/" && "active"
                              }`}
                              
                            >
                              Services Style 5
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
                          href="/feedback/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/feedback/" && "active"
                          }`}
                          
                        >
                          Feedback
                        </Link>
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

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/pricing/" && "active"
                          }`}
                          
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          User <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/login/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/login/" && "active"
                              }`}
                              
                            >
                              Login
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/sign-up/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/sign-up/" && "active"
                              }`}
                              
                            >
                              Sign Up
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/forgot-password/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentRoute == "/forgot-password/" && "active"
                              }`}
                              
                            >
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
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

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/coming-soon/" && "active"
                          }`}
                          
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/404/" && "active"
                          }`}
                          
                        >
                          404 Error Page
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
                      Shop <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/shop/" && "active"
                          }`}
                          
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/checkout/" && "active"
                          }`}
                          
                        >
                          Checkout
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
                      Blog <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog/" && "active"
                          }`}
                          
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog-2/" && "active"
                          }`}
                          
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog-3/" && "active"
                          }`}
                          
                        >
                          Blog Grid 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-4/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog-4/" && "active"
                          }`}
                          
                        >
                          Blog Right Sidebar 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-5/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog-5/" && "active"
                          }`}
                          
                        >
                          Blog Grid 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-6/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog-6/" && "active"
                          }`}
                          
                        >
                          Blog Right Sidebar 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/blog-details/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/blog/blog-details/" && "active"
                          }`}
                          
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/contact/" && "active"
                      }`}
                      
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">
                <Link href="/cart/" className="cart-wrapper-btn" >
                  <Icon.ShoppingCart />
                  <span>3</span>
                </Link>

                <Link href="/contact/" className="btn btn-light" >
                  Support
                </Link>

                <Link href="/login/" className="btn btn-primary" >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarStyleThree;
