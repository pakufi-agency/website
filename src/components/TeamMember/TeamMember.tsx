"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import styles from "./TeamMember.module.scss";

// import teamImg1 from "/public/images/team-image/team1.jpg";

interface TeamMemberProps {
  name: string;
  jobPosition: string;
  shortDescription: string;
  email: string;
  profilePic: { url: string; alternativeText: string };
  linkedinAbsoluteUrl: string;
  personalWebsiteAbsoluteUrl: string;
  githubAsboluteUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  jobPosition,
  shortDescription,
  email,
  profilePic,
  linkedinAbsoluteUrl,
  personalWebsiteAbsoluteUrl,
  githubAsboluteUrl,
}) => {
  return (
    <div className={styles.singleTeam}>
      <div className={styles.teamImage}>
        <Image
          src={profilePic.url}
          alt={profilePic.alternativeText}
          width={125}
          height={125}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>

      <div className={styles.teamContent}>
        <div className={styles.teamInfo}>
          <h3>{name}</h3>
          <span>{jobPosition}</span>
        </div>

        <ul>
          {linkedinAbsoluteUrl && (
            <li>
              <a
                href={linkedinAbsoluteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Linkedin />
              </a>
            </li>
          )}
          {personalWebsiteAbsoluteUrl && (
            <li>
              <a
                href={personalWebsiteAbsoluteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Link />
              </a>
            </li>
          )}
          {githubAsboluteUrl && (
            <li>
              <a
                href={githubAsboluteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.GitHub />
              </a>
            </li>
          )}
        </ul>

        <p>{shortDescription}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
