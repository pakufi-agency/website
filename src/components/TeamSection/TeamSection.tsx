"use client";

import React from "react";
import Image from "next/image";
import TeamMember from "../TeamMember/TeamMember";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

interface TeamSectionProps {
  sectionTitle: String;
  sectionSubtitle: String;
  members: [];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  members,
}) => {
  return (
    <>
      <div className="pt-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>{sectionTitle}</h2>
            <div className="bar"></div>
            <p>{sectionSubtitle}</p>
          </div>

          <div className="row justify-content-center">
            {members.map(
              (
                {
                  firstName,
                  lastName,
                  jobPosition,
                  email,
                  linkedinAbsoluteUrl,
                  personalWebsiteAbsoluteUrl,
                  githubAsboluteUrl,
                  profilePic,
                  shortDescription,
                },
                index
              ) => (
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-once="true"
                  key={index}
                >
                  <TeamMember
                    name={`${firstName} ${lastName}`}
                    jobPosition={jobPosition}
                    shortDescription={shortDescription}
                    email={email}
                    profilePic={profilePic}
                    linkedinAbsoluteUrl={linkedinAbsoluteUrl}
                    personalWebsiteAbsoluteUrl={personalWebsiteAbsoluteUrl}
                    githubAsboluteUrl={githubAsboluteUrl}
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
