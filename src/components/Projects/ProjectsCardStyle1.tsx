"use client";

import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from "next/image";

import worksImg1 from "/public/images/works-image/works-image1.jpg";
import worksImg2 from "/public/images/works-image/works-image2.jpg";
import worksImg3 from "/public/images/works-image/works-image3.jpg";
import worksImg4 from "/public/images/works-image/works-image4.jpg";
import worksImg5 from "/public/images/works-image/works-image5.jpg";
import worksImg6 from "/public/images/works-image/works-image6.jpg";
import worksImg7 from "/public/images/works-image/works-image7.jpg";
import worksImg8 from "/public/images/works-image/works-image8.jpg";
import worksImg9 from "/public/images/works-image/works-image9.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

const ProjectsCardStyle1 = () => {
  return (
    <>
      <div className="works-area pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg1} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      Incredible infrastructure
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg2} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      UI/UX Design
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg3} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      Apps Development
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg4} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      Mock-up Design
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg5} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      E-commerce
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg6} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      Web Design
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg7} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      React App Development
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg8} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      Digital Marketing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-works">
                <Image src={worksImg9} alt="image" width={640} height={550} />

                <Link
                  href="/projects/project-details/"
                  className="icon"
                  
                >
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/" >
                      Email Marketing
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

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
      </div>
    </>
  );
};

export default ProjectsCardStyle1;
