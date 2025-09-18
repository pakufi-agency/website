"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as Icon from "react-feather";
import styles from "./ProjectDetails.module.scss";

// Mock Data (replace later with Strapi)
const project = {
  title: "Network Marketing",
  description: [
    `Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
     sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto
     odi dignis sim qui blandit praesen lup ta de er...`,
    `Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
     sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto
     odi dignis sim qui blandit praesen lup ta de er...`,
  ],
  images: [
    "/images/legacy/works-image/works-image1.jpg",
    "/images/legacy/works-image/works-image2.jpg",
    "/images/legacy/works-image/works-image3.jpg",
    "/images/legacy/works-image/works-image4.jpg",
  ],
  info: {
    client: "John Doe",
    category: "Portfolio, Personal",
    date: "February 28, 2022",
    shareLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    livePreview: "#",
  },
};

const ProjectDetails: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.projectDetails} ${isVisible ? styles.animate : ""}`}
    >
      <div className="container">
        <div className="row">
          {project.images.map((img, idx) => (
            <div key={idx} className="col-lg-6 col-md-6 col-sm-6">
              <div className={styles.imageWrapper}>
                <Image src={img} alt={project.title} width={640} height={550} />
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className={styles.description}>
              <h3>{project.title}</h3>

              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className={styles.infoGrid}>
                <div className={styles.infoBox}>
                  <h4>Happy Client</h4>
                  <p>{project.info.client}</p>
                </div>

                <div className={styles.infoBox}>
                  <h4>Category</h4>
                  <p>{project.info.category}</p>
                </div>

                <div className={styles.infoBox}>
                  <h4>Date</h4>
                  <p>{project.info.date}</p>
                </div>

                <div className={styles.infoBox}>
                  <h4>Share</h4>
                  <ul className={styles.socialLinks}>
                    <li>
                      <a
                        href={project.info.shareLinks.facebook}
                        target="_blank"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a href={project.info.shareLinks.twitter} target="_blank">
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.info.shareLinks.instagram}
                        target="_blank"
                      >
                        <Icon.Instagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.info.shareLinks.linkedin}
                        target="_blank"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.infoBox}>
                  <a
                    href={project.info.livePreview}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
