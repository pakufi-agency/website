"use client";

import React from "react";
import TeamMember from "../TeamMember/TeamMember";

import styles from "./TeamSection.module.scss";
interface TeamSectionProps {
  team_members: [];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team_members }) => {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          {team_members.map(
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
                className={`col-8 col-lg-4 ${styles.card}`}
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
    </>
  );
};

export default TeamSection;
