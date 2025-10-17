"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProjectDetails.module.scss";
import { Link } from "react-feather";
import { getStrapiImageUrl } from "../../utils/utils";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { ButtonLink } from "../ButtonLink";
import { usePathname } from "next/navigation";

export interface ProjectDetailsProps {
  title: string;
  description: BlocksContent;
  media: { url: string; alternativeText: string }[];
  client: { label: string; url: string };
  livePreviewUrl?: string | null;
  services: string;
  projectTypes: string;
  coverPicture?: { url: string; alternativeText: string } | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  media,
  client,
  livePreviewUrl,
  services,
  projectTypes,
  coverPicture,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.projectDetails} ${isVisible ? styles.animate : ""}`}
    >
      <div className={`container`}>
        <div className={`${styles.contentContainer}`}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <div>
              <BlockRendererClient content={description} />
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoBox}>
                <h4>Client</h4>
                <Link></Link>
                {` `}
                <ButtonLink
                  href={client.url}
                  label={client.label}
                  pathname={pathname}
                />

                {livePreviewUrl && (
                  <div className={styles.livePreview}>
                    <ButtonLink
                      href={livePreviewUrl}
                      label="Live Preview"
                      pathname={pathname}
                      className={`btn btn-primary `}
                    />
                  </div>
                )}
              </div>

              <div className={styles.infoBox}>
                <h4>Type</h4>
                <p>{projectTypes || "—"}</p>
              </div>

              <div className={styles.infoBox}>
                <h4>Services</h4>
                <p>{services || "—"}</p>
              </div>
            </div>
          </div>

          <div className={styles.images}>
            {(media?.length ? media : coverPicture ? [coverPicture] : []).map(
              (img, idx) => (
                <div key={idx} className={styles.imageWrapper}>
                  <Image
                    src={getStrapiImageUrl(img.url)}
                    alt={img.alternativeText || "Project image"}
                    width={640}
                    height={550}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
