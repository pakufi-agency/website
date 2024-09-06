"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import projectImg1 from "/public/images/projects-img1.jpg";
import projectImg2 from "/public/images/projects-img2.jpg";
import projectImg3 from "/public/images/projects-img3.jpg";
import projectImg4 from "/public/images/projects-img4.jpg";
import projectImg5 from "/public/images/projects-img5.jpg";
import projectImg6 from "/public/images/projects-img6.jpg";
import projectImg7 from "/public/images/projects-img7.jpg";
import projectImg8 from "/public/images/projects-img8.jpg";

const ProjectsCardStyle2 = () => {
  return (
    <>
      <div className="ml-projects-area pt-80 pb-50">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg1} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg2} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg3} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg4} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg5} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg6} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg7} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-ml-projects-box">
                <Image src={projectImg8} alt="image" width={800} height={800} />

                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCardStyle2;
