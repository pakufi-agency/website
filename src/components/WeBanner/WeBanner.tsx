"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./WeBanner.module.scss";

import ctaShape from "/public/images/cta-shape.png";
import ctaShape2 from "/public/images/cta-shape2.png";
import circle from "/public/images/circle.png";

const WeBanner = () => {
  return (
    <>
      <div className={`${styles.ctaArea}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.ctaContent}>
                <h3>Connect and Manage your IoT at Scale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/contact" className="btn btn-primary">
                  Get Started!
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.ctaImg}>
                <Image src={ctaShape2} alt="image" width={648} height={401} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.circleBox}>
          <Image src={circle} alt="image" width={256} height={507} />
        </div>
        <div className={styles.ctaShape}>
          <Image src={ctaShape} alt="image" width={421} height={401} />
        </div>
      </div>
    </>
  );
};

export default WeBanner;
