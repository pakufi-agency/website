"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import discoverImg1 from "/public/images/bigdata-analytics/discover-img1.png";
import discoverImg2 from "/public/images/bigdata-analytics/discover-img2.jpg";
import analyticsShape1 from "/public/images/bigdata-analytics/analytics-shape1.png";

const DiscoverArea = () => {
  return (
    <>
      <div className="discover-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-image">
                <Image
                  src={discoverImg1}
                  alt="image"
                  width={427}
                  height={320}
                />
                <Image
                  src={discoverImg2}
                  alt="image"
                  width={360}
                  height={300}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h2>Engaging New Audiences through Smart Approach</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable. If you are going to use a passage.
                </p>

                <Link href="#" className="btn btn-primary" >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-shape1">
          <Image
            src={analyticsShape1}
            alt="image"
            width={523}
            height={586}
          />
        </div>
      </div>
    </>
  );
};

export default DiscoverArea;
