"use client";

import React from "react";
import TeamMember from "../TeamMember/TeamMember";

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
      <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
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
            {teamMembers.map(({ name, position, socialLinks, description }) => (
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <TeamMember
                  name={name}
                  position={position}
                  socialLinks={socialLinks}
                  description={description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
