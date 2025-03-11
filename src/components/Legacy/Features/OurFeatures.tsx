"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/features/feature-details/" >
                    Incredible Infrastructure
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/features/feature-details/" >
                    Email Notifications
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link href="/features/feature-details/" >
                    Simple Dashboard
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link href="/features/feature-details/" >
                    Information Retrieval
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link href="/features/feature-details/" >
                    Drag & Drop Functionality
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/" >
                    Deadline Reminders
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
