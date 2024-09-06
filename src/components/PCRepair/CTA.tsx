"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import manAndWomen from "/public/images/man-and-women.png";
import circle from "/public/images/circle.png";
import ctaShape from "/public/images/cta-shape.png";

const CTA = () => {
  return (
    <>
      <div className="repair-cta-area bg-0f054b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-repair-content">
                <h3>We&apos;ll help you get back to work</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cta-repair-img">
                <Image src={manAndWomen} alt="image" width={558} height={375} />
              </div>
            </div>
          </div>
        </div>

        <div className="circle-box">
          <Image src={circle} alt="image" width={256} height={507} />
        </div>
        <div className="cta-shape">
          <Image src={ctaShape} alt="image" width={421} height={401} />
        </div>
      </div>
    </>
  );
};

export default CTA;
