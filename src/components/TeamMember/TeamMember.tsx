"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import styles from "./TeamMember.module.scss";

import teamImg1 from "/public/images/team-image/team1.jpg";

interface SocialLink {
  social: string;
  link: string;
}

interface TeamMemberProps {
  name: string;
  position: string;
  socialLinks: SocialLink[];
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  socialLinks,
  description,
}) => {
  const renderIcon = (social: string) => {
    switch (social) {
      case "facebook":
        return <Icon.Facebook />;
      case "linkedin":
        return <Icon.Linkedin />;
      case "twitter":
        return <Icon.Twitter />;
      case "gitlab":
        return <Icon.Gitlab />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.singleTeam}>
      <div className={styles.teamImage}>
        <Image src={teamImg1} alt="Team Member" width={125} height={125} />
      </div>

      <div className={styles.teamContent}>
        <div className={styles.teamInfo}>
          <h3>{name}</h3>
          <span>{position}</span>
        </div>

        <ul>
          {socialLinks.map(({ social, link }) => (
            <li key={social}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {renderIcon(social)}
              </a>
            </li>
          ))}
        </ul>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
