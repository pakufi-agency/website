"use client";

import React from "react";
import PersonCard from "../PersonCard/PersonCard";

import styles from "./MentorsSection.module.scss";

type TeamMember = {
  fullName: string;
  jobPosition: string;
  isAdvisor: boolean;
  backgroundColor?: string;
  email?: string;
  linkedinAbsoluteUrl?: string;
  personalWebsiteAbsoluteUrl?: string;
  githubAsboluteUrl?: string;
  profilePic: { url: string; alternativeText: string };
  shortDescription?: string;
};

interface MentorsSectionProps {
  items: TeamMember[];
}

const MentorsSection: React.FC<MentorsSectionProps> = ({ items }) => {
  return (
    <div>
      {items.length > 0 && (
        <>
          <div className="row justify-content-center">
            {items.map((person, index) => (
              <div
                key={
                  (person.email ?? `${person.fullName}-${index}`) + "-advisor"
                }
                className={`col-8 col-lg-4 ${styles.card}`}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <PersonCard
                  name={person.fullName}
                  jobPosition={person.jobPosition}
                  email={person.email}
                  profilePic={person.profilePic}
                  linkedinAbsoluteUrl={person.linkedinAbsoluteUrl}
                  personalWebsiteAbsoluteUrl={person.personalWebsiteAbsoluteUrl}
                  backgroundColor="none"
                  withAnimatedBar={false}
                  iconColor="var(--jade-green)"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MentorsSection;
