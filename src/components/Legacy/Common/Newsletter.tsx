"use client";

import React from "react";
import Image from "next/image";

import freeTrialImg from "/public/images/free-trial-img.png";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

const Newsletter = () => {
  return (
    <>
      <div className="free-trial-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="free-trial-image">
                <Image
                  src={freeTrialImg}
                  alt="image"
                  width={700}
                  height={400}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="free-trial-content">
                <h2>Start your free trial</h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your business email here"
                  />
                  <button type="submit">Sign Up Free</button>
                </form>

                <p>
                  Test out the Machine Learning features for 14 days, no credit
                  card required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
