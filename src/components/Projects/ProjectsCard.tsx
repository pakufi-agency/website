"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";
import styles from "./ProjectsCard.module.scss";

// Mock Data (later replace with Strapi)
const projects = [
  {
    id: 1,
    title: "Incredible Infrastructure",
    description:
      "We are looking for a frontend developer to build scalable interfaces.",
    image: "/images/legacy/works-image/works-image1.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating delightful user experiences with strong attention to detail.",
    image: "/images/legacy/works-image/works-image2.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 3,
    title: "Apps Development",
    description: "Developing robust and scalable mobile and web applications.",
    image: "/images/legacy/works-image/works-image3.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 4,
    title: "Mock-up Design",
    description:
      "Turning concepts into polished mock-ups ready for development.",
    image: "/images/legacy/works-image/works-image4.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 5,
    title: "E-commerce",
    description: "Building modern e-commerce solutions with smooth user flows.",
    image: "/images/legacy/works-image/works-image5.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 6,
    title: "Web Design",
    description: "Clean, responsive, and user-focused web design.",
    image: "/images/legacy/works-image/works-image6.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 7,
    title: "React App Development",
    description: "High-performance apps powered by React ecosystem.",
    image: "/images/legacy/works-image/works-image7.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 8,
    title: "Digital Marketing",
    description:
      "Driving growth with data-driven digital marketing strategies.",
    image: "/images/legacy/works-image/works-image8.jpg",
    url: "/projects/project-details/",
  },
  {
    id: 9,
    title: "Email Marketing",
    description: "Building engaging email campaigns that convert and retain.",
    image: "/images/legacy/works-image/works-image9.jpg",
    url: "/projects/project-details/",
  },
];

const ProjectsCard: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <Link href={project.url}>
                <div className={styles.projectCard}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={550}
                    className={styles.projectImage}
                  />

                  <span className={styles.icon}>
                    <Icon.Settings />
                  </span>

                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
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
