import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer__area fix p-relative pt-200 pb-60">
        <div className="footer__shape">
          <img
            className="footer-shape-1"
            src="/assets/images/shape/footer/footer-s-1.png"
            alt=""
          />
          <img
            className="footer-shape-2"
            src="/assets/images/shape/footer/footer-s-2.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="mb-50">
            <Col xl={4} lg={4} md={10} sm={10}>
              <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                <div className="footer__widget-logo">
                  <img src="assets/images/logo/Logo-footer.svg" alt="logo" />
                  <p>
                    Core object made kolor adipisci elit sed diam nonummy nibh
                    euismod tincidunt laoreet dolore magna grinjon.
                  </p>
                </div>
                <div className="footer__widget-social">
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={2} md={4} sm={6}>
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>Our Services</h5>
                </div>
                <div className="footer__widget-link">
                  <ul>
                    <li>
                      <Link href="/services-details">Development</Link>
                    </li>
                    <li>
                      <Link href="/services-details">marketing</Link>
                    </li>
                    <li>
                      <Link href="/services-details">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link href="/services-details">E-commerce</Link>
                    </li>
                    <li>
                      <Link href="/services-details">Content Writing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={2} md={4} sm={6}>
              <div className="footer__widget footer__widget-mt-2">
                <div className="footer__widget-title">
                  <h5>Company</h5>
                </div>
                <div className="footer__widget-link">
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/team">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={10}>
              <div className="footer__widget footer__widget-mt">
                <div className="footer__widget-title">
                  <h5>Stay Connected</h5>
                </div>
                <div className="footer__widget-info">
                  <div className="footer__widget-address">
                    <p>66 Broklyn Street, New York United States of America</p>
                  </div>
                  <div className="footer__widget-phone d-flex align-items-center">
                    <i className="fa-solid fa-phone"></i>
                    <p>
                      <Link href="tel:+1166442200">+11 66 44 22 00</Link>
                    </p>
                  </div>
                  <div className="footer__widget-email d-flex align-items-center">
                    <i className="fa-solid fa-paper-plane"></i>
                    <p>
                      <Link href="mailto:info@example.com">
                        info@example.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col xl={12}>
              <div className="footer__copyright">
                <p>
                  Copyright © 2024
                  <Link href="https://alimasha.net/">Alimasha</Link>
                </p>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
