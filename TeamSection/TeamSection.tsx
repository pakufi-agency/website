"use client";

import React from "react";
import PersonCard from "../PersonCard/PersonCard";

import styles from "./TeamSection.module.scss";

type TeamMember = {
  firstName: string;
  lastName: string;
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

interface TeamSectionProps {
  items: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ items }) => {
  const teamMembers = items.filter((p) => !p.isAdvisor);
  const advisors = items.filter((p) => p.isAdvisor);

  console.log("items", items);
  console.log("advisors", advisors);

  return (
    <div>
      <div className="row justify-content-center">
        {teamMembers.map((person, index) => (
          <div
            key={
              person.email ?? `${person.firstName}-${person.lastName}-${index}`
            }
            className={`col-8 col-lg-4 ${styles.card}`}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <PersonCard
              name={`${person.firstName} ${person.lastName}`}
              jobPosition={person.jobPosition}
              shortDescription={person.shortDescription}
              email={person.email}
              profilePic={person.profilePic}
              linkedinAbsoluteUrl={person.linkedinAbsoluteUrl}
              personalWebsiteAbsoluteUrl={person.personalWebsiteAbsoluteUrl}
              githubAsboluteUrl={person.githubAsboluteUrl}
              backgroundColor="var(--gradient1)"
              withAnimatedBar={true}
            />
          </div>
        ))}
      </div>

      {advisors.length > 0 && (
        <>
          <h2 className={styles.subtitle}>Advisors</h2>
          <div className="row justify-content-center">
            {advisors.map((person, index) => (
              <div
                key={
                  (person.email ??
                    `${person.firstName}-${person.lastName}-${index}`) +
                  "-advisor"
                }
                className={`col-8 col-lg-4 ${styles.card}`}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <PersonCard
                  name={`${person.firstName} ${person.lastName}`}
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

export default TeamSection;
