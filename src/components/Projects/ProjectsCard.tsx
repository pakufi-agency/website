"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";
import styles from "./ProjectsCard.module.scss";
import { getStrapiImageUrl } from "@/utils/utils";

interface ProjectsListProps {
  items: any[];
}

const ProjectsCard: React.FC<ProjectsListProps> = ({ items = [] }) => {
  console.log("ProjectCard item:", items);

  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <div className="row justify-content-center">
          {items.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <Link href={`/projects/${project.slug}`}>
                <div className={styles.projectCard}>
                  <Image
                    src={getStrapiImageUrl(project.coverPicture?.url)}
                    alt={
                      project.coverPicture?.alternativeText || "Project image"
                    }
                    width={640}
                    height={550}
                    className={styles.projectImage}
                  />

                  <span className={styles.icon}>
                    <Icon.Settings />
                  </span>

                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    {/* <p>{project.services}</p> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;
