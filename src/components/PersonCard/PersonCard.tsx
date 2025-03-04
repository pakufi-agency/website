"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { getStrapiImageUrl } from "../../utils/utils";

import PersonIcon from "/public/images/icons/person-icon-placeholder.png";
import styles from "./PersonCard.module.scss";

interface PersonCardProps {
  name: string;
  jobPosition: string;
  shortDescription?: string;
  email?: string;
  profilePic: { url: string; alternativeText: string };
  linkedinAbsoluteUrl?: string;
  personalWebsiteAbsoluteUrl?: string;
  githubAsboluteUrl?: string;
  backgroundColor?: string;
  withAnimatedBar?: boolean;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  jobPosition,
  shortDescription,
  email,
  profilePic,
  linkedinAbsoluteUrl,
  personalWebsiteAbsoluteUrl,
  githubAsboluteUrl,
  backgroundColor,
  withAnimatedBar = true,
}) => {
  return (
    <div className={styles.card} style={{ background: backgroundColor }}>
      <div
        className={`${styles.cardPersonImage} ${
          withAnimatedBar && styles.withAnimatedBar
        }`}
      >
        <Image
          alt={profilePic?.alternativeText || "profile icon"}
          src={profilePic?.url ? getStrapiImageUrl(profilePic.url) : PersonIcon}
          width={125}
          height={125}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>

      <div className={styles.cardPersonContent}>
        <div className={styles.cardPersonInfo}>
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

          {email && (
            <li>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Mail />
              </a>
            </li>
          )}
        </ul>

        <p>{shortDescription}</p>
      </div>
    </div>
  );
};

export default PersonCard;
