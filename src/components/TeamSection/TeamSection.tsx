"use client";

import React from "react";
import Image from "next/image";
import TeamMember from "../TeamMember/TeamMember";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const teamMembers = [
  {
    name: "Giorgia Sambrotta",
    position: "CEO/CTO",
    socialLinks: [
      { social: "linkedin", link: "https://linkedin.com/g.sambrotta" },
      { social: "twitter", link: "https://linkedin.com/g.sambrotta" },
      { social: "github", link: "https://linkedin.com/g.sambrotta" },
    ],
    description: "She is the best",
  },
  {
    name: "Tahir Qalliu",
    position: "COMO",
    socialLinks: [
      { social: "linkedin", link: "https://linkedin.com/g.sambrotta" },
      { social: "twitter", link: "https://linkedin.com/g.sambrotta" },
      { social: "github", link: "https://linkedin.com/g.sambrotta" },
    ],
    description: "He is the best",
  },
  {
    name: "Karen Del Rosario",
    position: "CSO",
    socialLinks: [
      { social: "linkedin", link: "https://linkedin.com/g.sambrotta" },
      { social: "twitter", link: "https://linkedin.com/g.sambrotta" },
      { social: "github", link: "https://linkedin.com/g.sambrotta" },
    ],
    description: "She is the best",
  },
];

const TeamSection = () => {
  return (
    <>
      <div className="pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMembers.map(
              ({ name, position, socialLinks, description }, i) => (
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-once="true"
                  key={i}
                >
                  <TeamMember
                    name={name}
                    position={position}
                    socialLinks={socialLinks}
                    description={description}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape6 rotateme">
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

export default TeamSection;
