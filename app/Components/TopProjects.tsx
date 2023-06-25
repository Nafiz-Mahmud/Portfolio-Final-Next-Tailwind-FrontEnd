"use client";
import Image from "next/image";
import site_one from "../assets/site_one.png";
import site_img from "../assets/site_img.png";
import "../styles/top_projects.scss";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
export default function TopProjects() {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const projects = [
    {
      id: 1,
      title: "WellHall",
      image: site_one,
      link: "https://wellhall-resort-next-tailwind.vercel.app",
    },
    {
      id: 2,
      title: "Manreka Accounting",
      image: site_img,
      link: "https://manreka-accounting-solid-tailwind-frontend.vercel.app/",
    },
    {
      id: 3,
      title: "WellHall",
      image: site_one,
      link: "https://wellhall-resort-next-tailwind.vercel.app",
    },
  ];
  return (
    <div className="top_projects">
      <div className="top_projects_main">
        <h1 className="top_title">Top Projects</h1>

        <div className="projects" ref={ref}>
          {projects.map((project, index) => (
            <div
              className={`project ${inView && "project_anime"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              key={project.id}
            >
              <div className="project_link">
                <Link href={project.link} target="_blank">
                  <svg
                    fill="currentColor"
                    strokeWidth="0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                  </svg>
                </Link>
              </div>
              <div className="project_main">
                <div className="project_img">
                  <Image src={project.image} alt="site one" />
                </div>
                <h1 className="project_title">{project.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
