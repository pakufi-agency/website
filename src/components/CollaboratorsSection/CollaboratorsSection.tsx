"use client";

import React from "react";
import PersonCard from "../PersonCard/PersonCard";

import styles from "./CollaboratorsSection.module.scss";
interface CollaboratorsSectionProps {
  collaborators: [];
}

const CollaboratorsSection: React.FC<CollaboratorsSectionProps> = ({
  collaborators,
}) => {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          {collaborators.map(
            (
              {
                fullName,
                jobPosition,
                email,
                linkedinAbsoluteUrl,
                personalWebsiteAbsoluteUrl,
                profilePic,
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
                <PersonCard
                  name={fullName}
                  jobPosition={jobPosition}
                  email={email}
                  profilePic={profilePic}
                  linkedinAbsoluteUrl={linkedinAbsoluteUrl}
                  personalWebsiteAbsoluteUrl={personalWebsiteAbsoluteUrl}
                  backgroundColor="none"
                  withAnimatedBar={false}
                  iconColor="var(--jade-green)"
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CollaboratorsSection;
