import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import NavMenu from './NavMenu';


const Header = ({headerClass, menuClass, sideMenuClass, heroLogo}) => {    

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else if (window.scrollY < 100) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
    
    return (
        <>
        <header>
            <div id="header-sticky" className={`header__area header__transparent ${headerClass} ${sticky === true ? "sticky" : " "}`}>
                <Container>
                    <Row className="align-items-center">
                        <Col xxl={5} xl={4} lg={3} md={5} xs={6}>
                            <div className="logo">
                            <Link href="/">
                                <a>
                                    <img src={heroLogo} alt="logo" />
                                </a>
                            </Link>
                            </div>
                        </Col>
                        <Col xxl={7} xl={8} lg={9} md={7} xs={6} className="d-lg-block">
                            <div className={`main-menu d-flex justify-content-end ${menuClass}`}>
                                <nav id="mobile-menu" className="d-none d-xl-block">
                                    <NavMenu/>
                                </nav>
                                <div className="header__right d-flex align-items-center">
                                    <div className="d-none d-md-block">
                                    <Link href="/contact"><a className="m-btn">Get A Quote</a></Link>
                                    </div>
                                    <div className={`side-menu-icon d-xl-none ${sideMenuClass}`}>
                                        <button onClick={showSidebar} className="side-toggle"><i className="fa-solid fa-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
        
        <div className="fix">
            <div className={sidebar ? "side-info info-open" : "side-info"}>
                <button onClick={showSidebar} className="side-info-close"><i className="fas fa-times"></i></button>
                <div className="side-info-content">
                    <nav className="mobile-menu">
                        <NavMenu/>
                    </nav>
                    <div className="sidebar__contact mb-30">
                        <div className="contact-list mb-30">
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i>66 Broklyn Street, New York United States of America</li>
                                <li><i className="far fa-paper-plane"></i>
                                <Link href="mailto:info@example.com">
                                    <a>info@example.com</a>
                                </Link>
                                </li>
                                <li><i className="fas fa-phone"></i>
                                <Link href="tel:+1166442200">
                                    <a>+11 66 44 22 00</a>
                                </Link>
                                </li>
                            </ul>
                            <div className="sidebar__social">
                                <Link href="#">
                                    <a><i className="fab fa-facebook-f"></i></a>
                                </Link>
                                <Link href="#">
                                    <a><i className="fab fa-twitter"></i></a>
                                </Link>
                                <Link href="#">
                                    <a><i className="fab fa-instagram"></i></a>
                                </Link>
                                <Link href="#">
                                    <a><i className="fab fa-google"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={sidebar ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
    </>
    );
};

export default Header;